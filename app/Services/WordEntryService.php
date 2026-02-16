<?php

namespace App\Services;

use App\Models\WordEntry;

class WordEntryService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected WordEntry $model)
    {
        //
    }

    /**
     * Create a new word entry.
     */
    public function create(array $data): WordEntry
    {
        return $this->model->create($data);
    }

    
}
