<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Synonym;
use App\Services\DataTableService;
use App\Services\DefinitionService;
use App\Services\SynonymService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SynonymManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService, protected DefinitionService $definitionService, protected WordService $wordService, protected SynonymService $synonymsService) {}
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $queryBody = Synonym::with(['definition', 'synonymWord']);

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['definition_id', 'synonym_word_id'],
            'sortable' => ['id',  'created_at'],
        ]);

        return Inertia::render('admin/synonym-management/index', [
            'synonyms' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $wordDefinitions = $this->definitionService->all();
        $words = $this->wordService->all();
        return Inertia::render('admin/synonym-management/create', [
            'WordDefinitions' => $wordDefinitions,
            'Words' => $words
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'definition_id' => ['required', 'exists:word_entries,id'],
            'synonym_word_id' => ['required', 'exists:words,id'],
            'relevance_score' => ['required', 'integer', 'between:0,100'],
        ]);



        $this->synonymsService->create($data);

        return redirect()->route('admin.sm.synonyms.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $synonym = $this->synonymsService->find($id);
        if (!$synonym) {
            abort(404, 'Synonym not found');
        }

        $wordDefinitions = $this->definitionService->all();
        $words = $this->wordService->all();

        return Inertia::render('admin/synonym-management/edit', [
            'Synonym' => $synonym,
            'WordDefinitions' => $wordDefinitions,
            'Words' => $words
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $synonym = $this->synonymsService->find($id);
        if (!$synonym) {
            abort(404, 'Synonym not found');
        }

        $data = $request->validate([
            'definition_id' => ['required'],
            'synonym_word_id' => ['required'],
            'relevance_score' => ['required', 'integer', 'between:0,100'],
        ]);

        $this->synonymsService->update($id, $data);

        return redirect()->route('admin.sm.synonyms.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
