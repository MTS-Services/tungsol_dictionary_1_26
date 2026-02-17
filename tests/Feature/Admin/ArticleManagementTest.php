<?php

use App\Models\Admin;
use App\Models\Article;
use App\Models\User;
use App\Models\Word;

beforeEach(function () {
    $this->admin = Admin::factory()->create();
    $this->actingAs($this->admin, 'admin');
});

it('displays a list of articles', function () {
    Article::factory()->count(3)->create();

    $this->get(route('admin.am.articles.index'))
        ->assertInertia(fn ($page) => $page
            ->component('admin/article-management/index')
            ->has('articles.data', 3)
        )
        ->assertOk();
});

it('displays the create article page', function () {
    $this->get(route('admin.am.articles.create'))
        ->assertInertia(fn ($page) => $page->component('admin/article-management/create'))
        ->assertOk();
});

it('can create a new article', function () {
    $author = User::factory()->create();
    $words = Word::factory()->count(2)->create();

    $articleData = [
        'title' => 'Test Article',
        'body' => 'This is the body of the test article.',
        'excerpt' => 'This is an excerpt.',
        'category' => 'General',
        'author_id' => $author->id,
        'is_published' => true,
        'published_at' => now()->format('Y-m-d H:i:s'),
        'word_ids' => $words->pluck('id')->toArray(),
    ];

    $this->post(route('admin.am.articles.store'), $articleData)
        ->assertRedirect(route('admin.am.articles.index'))
        ->assertSessionHas('success', 'Article created successfully.');

    $this->assertDatabaseHas('articles', [
        'title' => 'Test Article',
        'slug' => 'test-article',
        'author_id' => $author->id,
        'is_published' => true,
    ]);

    $article = Article::where('title', 'Test Article')->first();
    expect($article->words()->count())->toBe(2);
});

it('displays the edit article page', function () {
    $article = Article::factory()->create();

    $this->get(route('admin.am.articles.edit', $article->id))
        ->assertInertia(fn ($page) => $page
            ->component('admin/article-management/edit')
            ->has('article')
        )
        ->assertOk();
});

it('can update an existing article', function () {
    $article = Article::factory()->create(['title' => 'Old Title', 'is_published' => false]);
    $newAuthor = User::factory()->create();
    $newWords = Word::factory()->count(3)->create();

    $updatedData = [
        'title' => 'Updated Article Title',
        'body' => 'Updated body content.',
        'excerpt' => 'Updated excerpt.',
        'category' => 'Updated',
        'author_id' => $newAuthor->id,
        'is_published' => true,
        'published_at' => now()->addDay()->format('Y-m-d H:i:s'),
        'word_ids' => $newWords->pluck('id')->toArray(),
    ];

    $this->put(route('admin.am.articles.update', $article->id), $updatedData)
        ->assertSessionHas('success', 'Article updated successfully.')
        ->assertRedirect(url()->previous()); // Redirects back to the edit page

    $this->assertDatabaseHas('articles', [
        'id' => $article->id,
        'title' => 'Updated Article Title',
        'slug' => 'updated-article-title',
        'author_id' => $newAuthor->id,
        'is_published' => true,
    ]);

    $article->refresh();
    expect($article->words()->count())->toBe(3);
});

it('can delete an article', function () {
    $article = Article::factory()->create();

    $this->delete(route('admin.am.articles.destroy', $article->id))
        ->assertSessionHas('success', 'Article deleted successfully.')
        ->assertRedirect(url()->previous()); // Redirects back to the index page

    $this->assertDatabaseMissing('articles', ['id' => $article->id]);
});

it('validates required fields when creating an article', function () {
    $this->post(route('admin.am.articles.store'), [])
        ->assertSessionHasErrors(['title', 'body'])
        ->assertInvalid(['title', 'body']);
});

it('validates required fields when updating an article', function () {
    $article = Article::factory()->create();

    $this->put(route('admin.am.articles.update', $article->id), ['title' => '', 'body' => ''])
        ->assertSessionHasErrors(['title', 'body'])
        ->assertInvalid(['title', 'body']);
});