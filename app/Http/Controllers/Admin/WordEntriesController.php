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
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class WordEntriesController extends Controller
{

    public function __construct(
        protected DataTableService $dataTableService,
        protected WordEntryService $wordEntryService,
        protected WordService $wordService,
        protected PartOfSpeechService $partOfSpeechService
    ) {}

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
        $data = $request->validate([
            'word_id' => 'required|exists:words,id',
            'part_of_speech_id' => 'required|exists:parts_of_speech,id',
            'etymology' => 'required|string',
            'pronunciation_ipa' => 'required|string',
            'pronunciation_audio' => 'nullable|file',
            'syllables' => 'required|string',
        ]);

        if ($request->hasFile('pronunciation_audio')) {

            $file = $request->file('pronunciation_audio');
            $fileName = 'pronunciation_audio_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('pronunciation_audio', $fileName, 'public');
            $data['pronunciation_audio'] =  $path;
        } else {

            unset($data['pronunciation_audio']);
        }

        $this->wordEntryService->create($data);

        return redirect()->route('admin.wm.words-entries.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $wordEntry = $this->wordEntryService->find($id);

        if ($wordEntry) {
            return Inertia::render('admin/word-entry/show', [
                'wordEntry' => $wordEntry
            ]);
        }

        return redirect()->route('admin.wm.words-entries.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id, Request $request)
    {
        //
        $wordEntry =   $this->wordEntryService->find($id);
        $wordEntry->load(['word', 'partOfSpeech']);



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

        return Inertia::render('admin/word-entry/edit', [
            'WordEntry' => $wordEntry,
            'words' => $words,
            'partofSpeeches' => $partofSpeeches
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $OldWordEntry = $this->wordEntryService->find($id);

        if (! $OldWordEntry) {
            return redirect()->route('admin.wm.words-entries.index');
        }
        $data = $request->validate([
            'word_id' => 'required|exists:words,id',
            'part_of_speech_id' => 'required|exists:parts_of_speech,id',
            'etymology' => 'required|string',
            'pronunciation_ipa' => 'required|string',
            'pronunciation_audio' => 'nullable|file',
            'syllables' => 'required|string',
            'delete_audio' => 'nullable|boolean',
        ]);

        if ($request->hasFile('pronunciation_audio')) {

            $file = $request->file('pronunciation_audio');
            $fileName = 'pronunciation_audio_' . hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('pronunciation_audio', $fileName, 'public');
            $data['pronunciation_audio'] =  $path;

            if ($OldWordEntry->pronunciation_audio && Storage::disk('public')->exists($OldWordEntry->pronunciation_audio)) {
                Storage::disk('public')->delete($OldWordEntry->pronunciation_audio);
            }
            unset($data['delete_audio']);
        }

        if (!$request->hasFile('pronunciation_audio') && $data['delete_audio'] != true) {

            unset($data['pronunciation_audio']);
            unset($data['delete_audio']);
        } else {

            if ($OldWordEntry->pronunciation_audio && Storage::disk('public')->exists($OldWordEntry->pronunciation_audio)) {
                Storage::disk('public')->delete($OldWordEntry->pronunciation_audio);
            }
            unset($data['delete_audio']);
        }


        $this->wordEntryService->update($id, $data);

        return redirect()->route('admin.wm.words-entries.index');
    }

    /**
     * Remove the specified resource in storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
