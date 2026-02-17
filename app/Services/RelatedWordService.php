<?php

namespace App\Services;

use App\Models\RelatedWord;

class RelatedWordService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected RelatedWord $model)
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

    public function delete($id){

        return $this->model->where('id', $id)->delete();
        
    }

    public function all(){
        return $this->model->all();
    }
    
}
