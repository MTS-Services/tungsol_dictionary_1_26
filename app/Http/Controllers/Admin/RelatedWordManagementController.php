<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RelatedWord;
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
    public function create()
    {
        $words = $this->wordService->all();
        return Inertia::render('admin/related-word-management/create', [
            'Words' => $words
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
    public function edit(string $id)
    {
        $relatedWord = $this->relatedWordService->find($id);
        if (!$relatedWord) {
            abort(404, 'Related Word not found');
        }

        $words = $this->wordService->all();

        return Inertia::render('admin/related-word-management/edit', [
            'RelatedWord' => $relatedWord,
            'Words' => $words
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
