<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RelatedWord;
use App\Models\Word;
use App\Services\DataTableService;
use App\Services\DefinitionService;
use App\Services\WordService;
use App\Services\RelatedWordService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RelatedWordManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService, protected DefinitionService $definitionService, protected WordService $wordService, protected RelatedWordService $relatedWordService) {}
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $queryBody = RelatedWord::with(['word', 'relatedWord']);

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['word_id', 'related_word_id'],
            'sortable' => ['id',  'created_at'],
        ]);

        return Inertia::render('admin/related-word-management/index', [
            'relatedWords' => $result['data'],
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
        $baseWordSearch = $request->input('base_word_search', '');
        $relatedWordSearch = $request->input('related_word_search', '');

        $baseWordQuery = Word::query();
        $relatedWordQuery = Word::query();

        if (! empty($baseWordSearch)) {
            $baseWordQuery->where('word', 'like', "%{$baseWordSearch}%");
        }

        if (! empty($relatedWordSearch)) {
            $relatedWordQuery->where('word', 'like', "%{$relatedWordSearch}%");
        }

        $baseWords = Inertia::scroll(
            fn () => $baseWordQuery->orderBy('word')->paginate(15, ['*'], 'base_word_page')
        );

        $relatedWords = Inertia::scroll(
            fn () => $relatedWordQuery->orderBy('word')->paginate(15, ['*'], 'related_word_page')
        );
        return Inertia::render('admin/related-word-management/create', [
            'BaseWords' => $baseWords,
            'RelatedWords' => $relatedWords,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'word_id' => ['required', 'exists:words,id'],
            'related_word_id' => ['required', 'exists:words,id'],
            'relation_type' => ['required', 'string'],
        ]);



        $this->relatedWordService->create($data);

        return redirect()->route('admin.rwm.related-words.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $relatedWord = RelatedWord::with(['word', 'relatedWord'])->findOrFail($id);
        
        return Inertia::render('admin/related-word-management/show', [
            'relatedWord' => $relatedWord
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id): Response
    {
        $relatedWord = $this->relatedWordService->find($id);
        if (!$relatedWord) {
            abort(404, 'Related Word not found');
        }

        $baseWordSearch = $request->input('base_word_search', '');
        $relatedWordSearch = $request->input('related_word_search', '');

        $baseWordQuery = Word::query();
        $relatedWordQuery = Word::query();

        if (! empty($baseWordSearch)) {
            $baseWordQuery->where('word', 'like', "%{$baseWordSearch}%");
        }

        if (! empty($relatedWordSearch)) {
            $relatedWordQuery->where('word', 'like', "%{$relatedWordSearch}%");
        }

        $baseWords = Inertia::scroll(
            fn () => $baseWordQuery->orderBy('word')->paginate(15, ['*'], 'base_word_page')
        );

        $relatedWords = Inertia::scroll(
            fn () => $relatedWordQuery->orderBy('word')->paginate(15, ['*'], 'related_word_page')
        );

        return Inertia::render('admin/related-word-management/edit', [
            'RelatedWord' => $relatedWord,
            'BaseWords' => $baseWords,
            'RelatedWords' => $relatedWords,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $relatedWord = $this->relatedWordService->find($id);
        if (!$relatedWord) {
            abort(404, 'Related Word not found');
        }

        $data = $request->validate([
            'word_id' => ['required'],
            'related_word_id' => ['required'],
            'relation_type' => ['required', 'string'],
        ]);

        $this->relatedWordService->update($id, $data);

        return redirect()->route('admin.rwm.related-words.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $relatedWord = $this->relatedWordService->find($id);
        if (!$relatedWord) {
            abort(404, 'Related Word not found');
        }

        $this->relatedWordService->delete($id);

        return redirect()->route('admin.rwm.related-words.index');
    }
}
