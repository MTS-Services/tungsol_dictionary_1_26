<?php

namespace App\Services;

use App\Models\Contact;

class ContactService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Contact $model)
    {
        //
    }
    
    public function create(array $data): Contact
    {
        return $this->model->create($data);
    }
}
