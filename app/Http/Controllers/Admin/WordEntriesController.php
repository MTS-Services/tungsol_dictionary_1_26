<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Exports\WordEntryTemplateExport;
use App\Models\Antonym;
use App\Models\Definition;
use App\Models\Example;
use App\Models\Language;
use App\Models\PartOfSpeech;
use App\Models\RelatedWord;
use App\Models\Synonym;
use App\Models\Word;
use App\Models\WordEntry;
use App\Services\DataTableService;
use App\Services\PartOfSpeechService;
use App\Services\WordEntryService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use App\Imports\HeadingRowToCollectionImport;
use Maatwebsite\Excel\Facades\Excel;

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

    /**
     * Show the bulk import screen.
     */
    public function importForm(): Response
    {
        $languages = Language::select('id', 'name', 'code')->get();
        $partsOfSpeech = PartOfSpeech::select('id', 'name', 'abbreviation')->get();

        return Inertia::render('admin/word-entry/import', [
            'languages' => $languages,
            'partsOfSpeech' => $partsOfSpeech,
        ]);
    }

    public function downloadTemplate()
    {
        return Excel::download(new WordEntryTemplateExport(), 'word-entry-import-template.xlsx');
    }

    /**
     * Parse and validate the uploaded Excel/CSV file and return a preview.
     */
    public function previewImport(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:xlsx,xls,csv'],
        ]);

        $file = $request->file('file');

        $import = new HeadingRowToCollectionImport;
        Excel::import($import, $file);
        $sheets = $import->getSheets();
        $rows = collect();

        foreach ($sheets as $sheetRows) {
            if (! $sheetRows instanceof \Illuminate\Support\Collection) {
                continue;
            }

            $firstNonEmptyRow = $sheetRows
                ->first(fn ($row) => $row instanceof \Illuminate\Support\Collection && $row->filter(fn ($value) => $value !== null && $value !== '')->isNotEmpty());

            if (! $firstNonEmptyRow instanceof \Illuminate\Support\Collection) {
                continue;
            }

            $keys = $firstNonEmptyRow->keys()->map(fn ($k) => (string) $k)->all();

            if (in_array('word', $keys, true) && in_array('language_code', $keys, true) && in_array('part_of_speech', $keys, true)) {
                $rows = $sheetRows;
                break;
            }
        }

        $previewRows = [];

        foreach ($rows as $index => $row) {
            if ($row->filter(fn ($value) => $value !== null && $value !== '')->isEmpty()) {
                continue;
            }

            $rowNumber = $index + 2;

            $wordValue = trim((string) ($row['word'] ?? ''));
            $languageCode = strtoupper(trim((string) ($row['language_code'] ?? '')));
            $partOfSpeechName = trim((string) ($row['part_of_speech'] ?? ''));
            $etymology = trim((string) ($row['etymology'] ?? ''));
            $pronunciationIpa = trim((string) ($row['pronunciation_ipa'] ?? ''));
            $pronunciationAudio = trim((string) ($row['pronunciation_audio'] ?? ''));
            $syllables = trim((string) ($row['syllables'] ?? ''));
            $definition = trim((string) ($row['definition'] ?? ''));

            $errors = [];

            if ($wordValue === '') {
                $errors[] = 'Word is required.';
            }

            if ($languageCode === '') {
                $errors[] = 'Language code is required.';
            }

            $language = null;
            if ($languageCode !== '') {
                $language = Language::where('code', $languageCode)->first();
                if (! $language) {
                    $errors[] = "Language code {$languageCode} not found.";
                }
            }

            $partOfSpeech = null;
            if ($partOfSpeechName !== '') {
                $partOfSpeech = PartOfSpeech::where('name', $partOfSpeechName)
                    ->orWhere('abbreviation', $partOfSpeechName)
                    ->first();
                if (! $partOfSpeech) {
                    $errors[] = "Part of speech '{$partOfSpeechName}' not found.";
                }
            } else {
                $errors[] = 'Part of speech is required.';
            }

            // Word is created on confirm if it doesn't exist — no error here

            $previewRows[] = [
                'row' => $rowNumber,
                'word' => $wordValue,
                'language_code' => $languageCode,
                'part_of_speech' => $partOfSpeechName,
                'etymology' => $etymology,
                'pronunciation_ipa' => $pronunciationIpa,
                'pronunciation_audio' => $pronunciationAudio,
                'syllables' => $syllables,
                'definition' => $definition,
                'definition_sort_order' => $row['definition_sort_order'] ?? null,
                'register' => trim((string) ($row['register'] ?? '')) ?: null,
                'example_sentence' => trim((string) ($row['example_sentence'] ?? '')) ?: null,
                'example_author' => trim((string) ($row['example_author'] ?? '')) ?: null,
                'example_sort_order' => $row['example_sort_order'] ?? null,
                'synonyms' => trim((string) ($row['synonyms'] ?? '')) ?: null,
                'antonyms' => trim((string) ($row['antonyms'] ?? '')) ?: null,
                'related_words' => trim((string) ($row['related_words'] ?? '')) ?: null,
                'relation_types' => trim((string) ($row['relation_types'] ?? '')) ?: null,
                'valid' => empty($errors),
                'errors' => $errors,
            ];
        }

        return Inertia::render('admin/word-entry/import', [
            'languages' => Language::select('id', 'name', 'code')->get(),
            'partsOfSpeech' => PartOfSpeech::select('id', 'name', 'abbreviation')->get(),
            'previewRows' => $previewRows,
        ]);
    }

    /**
     * Persist valid rows from the preview into the database.
     */
    public function confirmImport(Request $request)
    {
        $payload = $request->validate([
            'rows' => ['required', 'array'],
            'rows.*.word' => ['required', 'string'],
            'rows.*.language_code' => ['required', 'string'],
            'rows.*.part_of_speech' => ['required', 'string'],
            'rows.*.etymology' => ['nullable', 'string'],
            'rows.*.pronunciation_ipa' => ['nullable', 'string'],
            'rows.*.pronunciation_audio' => ['nullable', 'string'],
            'rows.*.syllables' => ['nullable', 'string'],
            'rows.*.definition' => ['nullable', 'string'],
            'rows.*.definition_sort_order' => ['nullable'],
            'rows.*.register' => ['nullable', 'string'],
            'rows.*.domain' => ['nullable', 'string'],
            'rows.*.region' => ['nullable', 'string'],
            'rows.*.usage_note' => ['nullable', 'string'],
            'rows.*.example_sentence' => ['nullable', 'string'],
            'rows.*.example_source' => ['nullable', 'string'],
            'rows.*.example_author' => ['nullable', 'string'],
            'rows.*.example_year' => ['nullable'],
            'rows.*.example_sort_order' => ['nullable'],
            'rows.*.synonyms' => ['nullable', 'string'],
            'rows.*.synonym_scores' => ['nullable', 'string'],
            'rows.*.antonyms' => ['nullable', 'string'],
            'rows.*.antonym_scores' => ['nullable', 'string'],
            'rows.*.related_words' => ['nullable', 'string'],
            'rows.*.relation_types' => ['nullable', 'string'],
            'rows.*.valid' => ['required', 'boolean'],
        ]);

        $rows = collect($payload['rows']);
        $imported = 0;
        $skipped = 0;

        DB::transaction(function () use ($rows, &$imported, &$skipped) {
            foreach ($rows as $row) {
                if (! ($row['valid'] ?? false)) {
                    $skipped++;
                    continue;
                }

                $wordValue = trim((string) $row['word']);
                $languageCode = strtoupper(trim((string) $row['language_code']));
                $partOfSpeechName = trim((string) $row['part_of_speech']);

                if ($wordValue === '' || $languageCode === '' || $partOfSpeechName === '') {
                    $skipped++;
                    continue;
                }

                $language = Language::where('code', $languageCode)->first();
                if (! $language) {
                    $skipped++;
                    continue;
                }

                $partOfSpeech = PartOfSpeech::where('name', $partOfSpeechName)
                    ->orWhere('abbreviation', $partOfSpeechName)
                    ->first();
                if (! $partOfSpeech) {
                    $skipped++;
                    continue;
                }

                $word = $this->createOrGetWordForLanguage($wordValue, $language);

                // Reuse existing entry for the same word + part of speech + details, or create it once.
                $wordEntry = $this->createOrGetWordEntryForImport($word, $partOfSpeech, $row);

                if (! empty(trim((string) ($row['definition'] ?? '')))) {
                    // Ensure we only have one Definition record per (word_entry, definition text).
                    $definition = Definition::firstOrCreate(
                        [
                            'word_entry_id' => $wordEntry->id,
                            'definition' => trim((string) $row['definition']),
                        ],
                        [
                            'sort_order' => ! empty($row['definition_sort_order']) ? (int) $row['definition_sort_order'] : 0,
                            'register' => $row['register'] ?? null,
                            'domain' => $row['domain'] ?? null,
                            'region' => $row['region'] ?? null,
                            'usage_note' => $row['usage_note'] ?? null,
                        ]
                    );

                    if (! empty(trim((string) ($row['example_sentence'] ?? '')))) {
                        Example::create([
                            'definition_id' => $definition->id,
                            'sentence' => trim((string) $row['example_sentence']),
                            'source' => $row['example_source'] ?? null,
                            'author' => $row['example_author'] ?? null,
                            'year' => ! empty($row['example_year']) ? (int) $row['example_year'] : null,
                            'sort_order' => ! empty($row['example_sort_order']) ? (int) $row['example_sort_order'] : 0,
                        ]);
                    }

                    if (! empty(trim((string) ($row['synonyms'] ?? '')))) {
                        $synonymWords = array_map('trim', explode(',', $row['synonyms']));
                        $synonymScores = ! empty($row['synonym_scores'])
                            ? array_map('trim', explode(',', $row['synonym_scores']))
                            : [];

                        foreach ($synonymWords as $idx => $synonymWord) {
                            if ($synonymWord === '') {
                                continue;
                            }

                            $synWord = $this->createOrGetWordForLanguage($synonymWord, $language);

                            // If this synonym word is already linked anywhere, skip creating another record.
                            if (Synonym::where('synonym_word_id', $synWord->id)->exists()) {
                                continue;
                            }

                            Synonym::firstOrCreate(
                                [
                                    'definition_id' => $definition->id,
                                    'synonym_word_id' => $synWord->id,
                                ],
                                [
                                    'relevance_score' => isset($synonymScores[$idx]) ? (int) $synonymScores[$idx] : 100,
                                ]
                            );
                        }
                    }

                    if (! empty(trim((string) ($row['antonyms'] ?? '')))) {
                        $antonymWords = array_map('trim', explode(',', $row['antonyms']));
                        $antonymScores = ! empty($row['antonym_scores'])
                            ? array_map('trim', explode(',', $row['antonym_scores']))
                            : [];

                        foreach ($antonymWords as $idx => $antonymWord) {
                            if ($antonymWord === '') {
                                continue;
                            }

                            $antWord = $this->createOrGetWordForLanguage($antonymWord, $language);

                            // If this antonym word is already linked anywhere, skip creating another record.
                            if (Antonym::where('antonym_word_id', $antWord->id)->exists()) {
                                continue;
                            }

                            Antonym::firstOrCreate(
                                [
                                    'definition_id' => $definition->id,
                                    'antonym_word_id' => $antWord->id,
                                ],
                                [
                                    'relevance_score' => isset($antonymScores[$idx]) ? (int) $antonymScores[$idx] : 100,
                                ]
                            );
                        }
                    }
                }

                if (! empty(trim((string) ($row['related_words'] ?? '')))) {
                    $relatedWords = array_map('trim', explode(',', $row['related_words']));
                    $relationTypes = ! empty($row['relation_types'])
                        ? array_map('trim', explode(',', $row['relation_types']))
                        : [];

                    foreach ($relatedWords as $idx => $relatedWord) {
                        if ($relatedWord === '') {
                            continue;
                        }

                        $relWord = $this->createOrGetWordForLanguage($relatedWord, $language);

                        // If this related word is already linked anywhere, skip creating another record.
                        if (RelatedWord::where('related_word_id', $relWord->id)->exists()) {
                            continue;
                        }

                        RelatedWord::firstOrCreate(
                            [
                                'word_id' => $word->id,
                                'related_word_id' => $relWord->id,
                                'relation_type' => isset($relationTypes[$idx]) ? $relationTypes[$idx] : 'related',
                            ]
                        );
                    }
                }

                $imported++;
            }
        });

        return redirect()
            ->route('admin.wm.words-entries.index')
            ->with('success', "Import completed. Imported {$imported} word entries, skipped {$skipped} rows.");
    }

    /**
     * Find an existing word for the given language, or create a new one with a unique slug.
     */
    protected function createOrGetWordForLanguage(string $text, Language $language): Word
    {
        $text = trim($text);

        // Keep words globally unique by spelling: if a word already exists anywhere, reuse it.
        if ($existing = Word::where('word', $text)->first()) {
            return $existing;
        }

        return Word::create([
            'word' => $text,
            'language_id' => $language->id,
            'slug' => $this->generateUniqueSlug($text),
            'is_approved' => true,
            'search_count' => 0,
        ]);
    }

    /**
     * Generate a slug that is unique across all words.
     */
    protected function generateUniqueSlug(string $text): string
    {
        $base = Str::slug($text);

        if ($base === '') {
            $base = (string) Str::uuid();
        }

        $slug = $base;
        $suffix = 1;

        while (Word::where('slug', $slug)->exists()) {
            $slug = $base.'-'.$suffix;
            $suffix++;
        }

        return $slug;
    }

    /**
     * Find an existing word entry for the given word + part of speech + details, or create a new one.
     * This prevents duplicate WordEntry rows when the same data is imported multiple times.
     */
    protected function createOrGetWordEntryForImport(Word $word, PartOfSpeech $partOfSpeech, array $row): WordEntry
    {
        return WordEntry::firstOrCreate(
            [
                'word_id' => $word->id,
                'part_of_speech_id' => $partOfSpeech->id,
                'etymology' => $row['etymology'] ?? null,
                'pronunciation_ipa' => $row['pronunciation_ipa'] ?? null,
                'pronunciation_audio' => $row['pronunciation_audio'] ?? null,
                'syllables' => $row['syllables'] ?? null,
            ],
            [
                'sort_order' => 0,
            ]
        );
    }
}
