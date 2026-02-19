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
    
}
