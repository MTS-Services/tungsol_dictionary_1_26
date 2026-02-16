<?php

namespace App\Services;

use App\Models\PartOfSpeech;

class PartOfSpeechService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected PartOfSpeech $model)
    {
        //
    }

    /**
     * Create a new part of speech.
     */
    public function create(array $data): PartOfSpeech
    {
        return $this->model->create($data);
    }

    public function all()
    {
        return $this->model->all();
    }

}
