<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Definition;
use App\Models\Synonym;
use App\Models\Word;
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
    public function create(Request $request): Response
    {
        $definitionSearch = $request->input('definition_search', '');
        $wordSearch = $request->input('word_search', '');

        $definitionQuery = Definition::with('wordEntry.word');

        if (! empty($definitionSearch)) {
            $definitionQuery->where(function ($query) use ($definitionSearch) {
                $query->where('definition', 'like', "%{$definitionSearch}%")
                    ->orWhereHas('wordEntry.word', function ($wordQuery) use ($definitionSearch) {
                        $wordQuery->where('word', 'like', "%{$definitionSearch}%");
                    });
            });
        }

        $wordQuery = Word::query();

        if (! empty($wordSearch)) {
            $wordQuery->where('word', 'like', "%{$wordSearch}%");
        }

        $wordDefinitions = Inertia::scroll(
            fn () => $definitionQuery->orderBy('word_entry_id')->paginate(15, ['*'], 'definition_page')
        );

        $words = Inertia::scroll(
            fn () => $wordQuery->orderBy('word')->paginate(15, ['*'], 'word_page')
        );
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
        $synonym = Synonym::with(['definition', 'synonymWord'])->findOrFail($id);

        return Inertia::render('admin/synonym-management/show', [
            'synonym' => $synonym
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id): Response
    {
        $synonym = $this->synonymsService->find($id);
        if (!$synonym) {
            abort(404, 'Synonym not found');
        }

        $definitionSearch = $request->input('definition_search', '');
        $wordSearch = $request->input('word_search', '');

        $definitionQuery = Definition::with('wordEntry.word');

        if (! empty($definitionSearch)) {
            $definitionQuery->where(function ($query) use ($definitionSearch) {
                $query->where('definition', 'like', "%{$definitionSearch}%")
                    ->orWhereHas('wordEntry.word', function ($wordQuery) use ($definitionSearch) {
                        $wordQuery->where('word', 'like', "%{$definitionSearch}%");
                    });
            });
        }

        $wordQuery = Word::query();

        if (! empty($wordSearch)) {
            $wordQuery->where('word', 'like', "%{$wordSearch}%");
        }

        $wordDefinitions = Inertia::scroll(
            fn () => $definitionQuery->orderBy('word_entry_id')->paginate(15, ['*'], 'definition_page')
        );

        $words = Inertia::scroll(
            fn () => $wordQuery->orderBy('word')->paginate(15, ['*'], 'word_page')
        );

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
