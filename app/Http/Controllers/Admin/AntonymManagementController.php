<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Antonym;
use App\Services\AntonymService;
use App\Services\DataTableService;
use App\Services\DefinitionService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AntonymManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService, protected DefinitionService $definitionService, protected WordService $wordService, protected AntonymService $antonymService) {}
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $queryBody = Antonym::with(['definition', 'antonymWord']);

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['definition_id', 'antonym_word_id'],
            'sortable' => ['id',  'created_at'],
        ]);

        return Inertia::render('admin/antonym-management/index', [
            'antonyms' => $result['data'],
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
        return Inertia::render('admin/antonym-management/create', [
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
            'antonym_word_id' => ['required', 'exists:words,id'],
            'relevance_score' => ['required', 'integer', 'between:0,100'],
        ]);



        $this->antonymService->create($data);

        return redirect()->route('admin.am.antonyms.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $antonym = Antonym::with(['definition', 'antonymWord'])->findOrFail($id);
        
        return Inertia::render('admin/antonym-management/show', [
            'antonym' => $antonym
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $antonym = $this->antonymService->find($id);
        if (!$antonym) {
            abort(404, 'Antonym not found');
        }

        $wordDefinitions = $this->definitionService->all();
        $words = $this->wordService->all();

        return Inertia::render('admin/antonym-management/edit', [
            'Antonym' => $antonym,
            'WordDefinitions' => $wordDefinitions,
            'Words' => $words
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $antonym = $this->antonymService->find($id);
        if (!$antonym) {
            abort(404, 'Antonym not found');
        }

        $data = $request->validate([
            'definition_id' => ['required'],
            'antonym_word_id' => ['required'],
            'relevance_score' => ['required', 'integer', 'between:0,100'],
        ]);

        $this->antonymService->update($id, $data);

        return redirect()->route('admin.am.antonyms.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $antonym = $this->antonymService->find($id);
        if (!$antonym) {
            abort(404, 'Antonym not found');
        }
        $this->antonymService->delete($id);
        return redirect()->route('admin.am.antonyms.index');
    }
}
