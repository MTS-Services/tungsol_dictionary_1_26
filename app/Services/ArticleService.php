<?php

namespace App\Services;

use App\Models\Article;
use Illuminate\Support\Str;

class ArticleService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Article $model)
    {
        //
    }
    public function create($data){
        $data['slug'] = Str::slug($data['title']);
        return $this->model->create($data);

    }

    public function find($value, $column='id'){

        return $this->model->where($column, $value)->first();

    }    

    public function update($id, array $data){
        if (isset($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }
        return $this->model->where('id', $id)->update($data);
        
    }

    public function delete($id){
        return $this->model->where('id', $id)->delete();
    }

    public function all(){
        return $this->model->all();
    }
    
}
