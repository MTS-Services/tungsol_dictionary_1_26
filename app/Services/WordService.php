<?php

namespace App\Services;

use App\Models\Word;

class WordService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Word $model)
    {
        //
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($slug, $column = 'id')
    {
        return $this->model->where($column, $slug)->first();
    }

    // getTrendingWords
    public function getTrendingWords()
    {
        return $this->model->orderBy('search_count', 'desc')->limit(10)->get();
    }

    /**
     * Get words by letter with pagination
     */
    public function getWordsByLetter(string $letter, int $page = 1, int $perPage = 50)
    {
        return $this->model
            ->where('word', 'LIKE', $letter . '%')
            ->where('is_approved', true)
            ->orderBy('word', 'asc')
            ->paginate($perPage, ['*'], 'page', $page);
    }

    /**
     * Get pagination info for words by letter
     */
    public function getWordsByLetterInfo(string $letter, int $page = 1, int $perPage = 50)
    {
        $words = $this->getWordsByLetter($letter, $page, $perPage);
        
        return [
            'words' => $words->items(),
            'pagination' => [
                'current_page' => $words->currentPage(),
                'last_page' => $words->lastPage(),
                'per_page' => $words->perPage(),
                'total' => $words->total(),
                'from' => $words->firstItem(),
                'to' => $words->lastItem(),
                'has_more_pages' => $words->hasMorePages(),
                'prev_page_url' => $words->previousPageUrl(),
                'next_page_url' => $words->nextPageUrl(),
            ]
        ];
    }
    
}
