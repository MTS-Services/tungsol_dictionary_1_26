<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Word;
use App\Models\WordEntry;
use App\Services\DataTableService;
use App\Services\PartOfSpeechService;
use App\Services\WordEntryService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WordEntriesController extends Controller
{

    public function __construct(protected DataTableService $dataTableService,
     protected WordEntryService $wordEntryService , 
     protected WordService $wordService, 
     protected PartOfSpeechService $partOfSpeechService) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $queryBody = WordEntry::with(['word', 'partOfSpeech']);

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['word'],
            'sortable' => ['id', 'word', 'is_approved', 'search_count', 'created_at'],
        ]);

        return Inertia::render('admin/word-entry/index', [
            'word_entries' => $result['data'],
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
        // Retrieve the search term from the request
        $search = $request->input('search', '');

    
        // Build the query
        $query = Word::select('id', 'word')
            ->where('is_approved', true);
        
        // Apply search filter if provided
        if (!empty($search)) {
            $query->where('word', 'like', "%{$search}%");
        }
        
        // Use Inertia::scroll() to enable infinite scroll
        // This wraps pagination with proper metadata for the frontend
        $words = Inertia::scroll(
            fn() => $query
                ->orderBy('word')
                ->paginate(15)
        );

        $partofSpeeches = $this->partOfSpeechService->all();
        return Inertia::render('admin/word-entry/create', [
            'words' => $words,
            'partofSpeeches' => $partofSpeeches

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'word_id' => 'required|exists:words,id',
            'part_of_speech_id' => 'required|exists:part_of_speeches,id',
        ]);
        return true; 
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource in storage.
     */
    public function destroy(string $id)
    {
        //
    }
}