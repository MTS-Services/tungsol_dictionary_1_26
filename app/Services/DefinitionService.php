<?php

namespace App\Services;

use App\Models\Definition;

class DefinitionService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Definition $model)
    {
        //
    }
    public function create($data){

        return $this->model->create($data);

    }

    public function find($value, $column='id'){

        return $this->model->where($column, $value)->first();

    }    

    public function update($id, array $data){

        return $this->model->where('id', $id)->update($data);
        
    }

    public function all(){
        return $this->model->all();
    }

    public function countTotalDefinitions(){
        return $this->model->count();
    }
    
}
