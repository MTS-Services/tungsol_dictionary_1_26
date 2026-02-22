<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WordOfTheDay;
use App\Models\Word;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WordOfTheDayManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = WordOfTheDay::with('word');

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['date'],
            'sortable' => ['id', 'date', 'created_at'],
        ]);

        return Inertia::render('admin/word-of-the-day-management/index', [
            'wordOfTheDays' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    public function create(): Response
    {
        $words = Word::select('id', 'word')->where('is_approved', true)->get();

        return Inertia::render('admin/word-of-the-day-management/create', [
            'words' => $words,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'word_id' => ['required', 'exists:words,id'],
            'date' => ['required', 'date', 'unique:word_of_the_day,date'],
        ]);

        WordOfTheDay::create($data);

        return redirect()->route('admin.wotdm.word-of-the-day.index')->with('success', 'Word of the Day created successfully.');
    }

    public function edit(string $id): Response
    {
        $wordOfTheDay = WordOfTheDay::with('word')->findOrFail($id);
        $words = Word::select('id', 'word')->where('is_approved', true)->get();

        return Inertia::render('admin/word-of-the-day-management/edit', [
            'wordOfTheDay' => $wordOfTheDay,
            'words' => $words,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $wordOfTheDay = WordOfTheDay::findOrFail($id);

        $data = $request->validate([
            'word_id' => ['required', 'exists:words,id'],
            'date' => ['required', 'date', 'unique:word_of_the_day,date,' . $id],
        ]);

        $wordOfTheDay->update($data);

        return back()->with('success', 'Word of the Day updated successfully.');
    }

    public function destroy(string $id)
    {
        $wordOfTheDay = WordOfTheDay::findOrFail($id);
        $wordOfTheDay->delete();

        return back()->with('success', 'Word of the Day deleted successfully.');
    }

    public function show(string $id): Response
    {
        $wordOfTheDay = WordOfTheDay::with('word')->findOrFail($id);

        return Inertia::render('admin/word-of-the-day-management/show', [
            'wordOfTheDay' => $wordOfTheDay,
        ]);
    }
}
