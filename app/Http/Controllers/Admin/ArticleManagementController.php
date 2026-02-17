<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\User;
use App\Models\Word;
use App\Services\ArticleService;
use App\Services\DataTableService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ArticleManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService, protected ArticleService $articleService){}

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

        $article = $this->articleService->create($data);

        if (!empty($data['word_ids'])) {
            $article->words()->attach($data['word_ids']);
        }

        return redirect()->route('admin.am.articles.index');
    }

    public function edit(string $id): Response
    {
        $article = $this->articleService->find($id);
        if (!$article) {
            throw new NotFoundHttpException('Article not found.');
        }
        $article->load('words');

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
        $article = $this->articleService->find($id);
        if (!$article) {
            throw new NotFoundHttpException('Article not found.');
        }

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

        $this->articleService->update($id, $data);
        
        $article->load('words');
        if (isset($data['word_ids'])) {
            $article->words()->sync($data['word_ids']);
        }

        return redirect()->route('admin.am.articles.index');
    }

    public function destroy(string $id)
    {
        $article = $this->articleService->find($id);
        if (!$article) {
            throw new NotFoundHttpException('Article not found.');
        }
        $this->articleService->delete($id);

        return redirect()->route('admin.am.articles.index');
    }
}
