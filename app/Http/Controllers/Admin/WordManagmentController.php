<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Word;
use App\Models\Language;
use App\Models\Category;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class WordManagmentController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = Word::with('language');

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['word'],
            'sortable' => ['id', 'word', 'is_approved', 'search_count', 'created_at'],
        ]);

        return Inertia::render('admin/word-management/index', [
            'words' => $result['data'],
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
        $languages = Language::select('id', 'name', 'code')->get();
        $categories = Category::select('id', 'name')->get();

        return Inertia::render('admin/word-management/create', [
            'languages' => $languages,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'word' => ['required', 'string', 'max:255'],
            'language_id' => ['required', 'exists:languages,id'],
            'is_approved' => ['boolean'],
            'category_ids' => ['nullable', 'array'],
            'category_ids.*' => ['exists:categories,id'],
        ]);

        $data['slug'] = Str::slug($data['word']);

        $word = Word::create($data);

        if (!empty($data['category_ids'])) {
            $word->categories()->attach($data['category_ids']);
        }

        return redirect()->route('admin.wm.words.index')->with('success', 'Word created successfully.');
    }

    public function edit(string $id): Response
    {
        $word = Word::with(['language', 'categories'])->findOrFail($id);
        $languages = Language::select('id', 'name', 'code')->get();
        $categories = Category::select('id', 'name')->get();

        return Inertia::render('admin/word-management/edit', [
            'word' => $word,
            'languages' => $languages,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $word = Word::findOrFail($id);

        $data = $request->validate([
            'word' => ['required', 'string', 'max:255'],
            'language_id' => ['required', 'exists:languages,id'],
            'is_approved' => ['boolean'],
            'category_ids' => ['nullable', 'array'],
            'category_ids.*' => ['exists:categories,id'],
        ]);

        $data['slug'] = Str::slug($data['word']);

        $word->update($data);

        if (isset($data['category_ids'])) {
            $word->categories()->sync($data['category_ids']);
        }

        return back()->with('success', 'Word updated successfully.');
    }

    public function destroy(string $id)
    {
        $word = Word::findOrFail($id);
        $word->delete();

        return back()->with('success', 'Word deleted successfully.');
    }
    public function show(string $id): Response
    {
        $word = Word::with(['language', 'categories'])->findOrFail($id);

        return Inertia::render('admin/word-management/show', [
            'word' => $word,
        ]);
    }
}
