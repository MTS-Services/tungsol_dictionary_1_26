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
    
}
