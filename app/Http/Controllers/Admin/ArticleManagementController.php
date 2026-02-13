<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\User;
use App\Models\Word;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ArticleManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = Article::with('author');

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['title', 'category', 'excerpt'],
            'sortable' => ['id', 'title', 'category', 'is_published', 'published_at', 'created_at'],
        ]);

        return Inertia::render('admin/article-management/index', [
            'articles' => $result['data'],
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
        $authors = User::select('id', 'name', 'email')->get();
        $words = Word::select('id', 'word')->where('is_approved', true)->get();

        return Inertia::render('admin/article-management/create', [
            'authors' => $authors,
            'words' => $words,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'body' => ['required', 'string'],
            'excerpt' => ['nullable', 'string'],
            'category' => ['nullable', 'string', 'max:100'],
            'author_id' => ['nullable', 'exists:users,id'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
            'word_ids' => ['nullable', 'array'],
            'word_ids.*' => ['exists:words,id'],
        ]);

        $data['slug'] = Str::slug($data['title']);

        $article = Article::create($data);

        if (!empty($data['word_ids'])) {
            $article->words()->attach($data['word_ids']);
        }

        return redirect()->route('admin.am.articles.index')->with('success', 'Article created successfully.');
    }

    public function edit(string $id): Response
    {
        $article = Article::with('words')->findOrFail($id);
        $authors = User::select('id', 'name', 'email')->get();
        $words = Word::select('id', 'word')->where('is_approved', true)->get();

        return Inertia::render('admin/article-management/edit', [
            'article' => $article,
            'authors' => $authors,
            'words' => $words,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $article = Article::findOrFail($id);

        $data = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'body' => ['required', 'string'],
            'excerpt' => ['nullable', 'string'],
            'category' => ['nullable', 'string', 'max:100'],
            'author_id' => ['nullable', 'exists:users,id'],
            'is_published' => ['boolean'],
            'published_at' => ['nullable', 'date'],
            'word_ids' => ['nullable', 'array'],
            'word_ids.*' => ['exists:words,id'],
        ]);

        $data['slug'] = Str::slug($data['title']);

        $article->update($data);

        if (isset($data['word_ids'])) {
            $article->words()->sync($data['word_ids']);
        }

        return back()->with('success', 'Article updated successfully.');
    }

    public function destroy(string $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return back()->with('success', 'Article deleted successfully.');
    }
}
