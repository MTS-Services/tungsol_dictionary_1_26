<?php

namespace App\Services;

use App\Models\Definition;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DefinitionService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected Definition $model)
    {
        //
    }
    public function create($data)
    {



        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $extension = $data['image']->getClientOriginalExtension();
            $filename = time() . '_' . Str::random(10) . '.' . $extension;
            $data['image'] = Storage::disk('public')
                ->putFileAs('images', $data['image'], $filename);
        }
        return $this->model->create($data);
    }

    public function find($value, $column = 'id')
    {

        return $this->model->where($column, $value)->first();
    }

    public function update($id, array $data)
    {

        $oldDefinition = $this->find($id);
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $extension = $data['image']->getClientOriginalExtension();
            $filename = time() . '_' . Str::random(10) . '.' . $extension;
            $data['image'] = Storage::disk('public')
                ->putFileAs('images', $data['image'], $filename);
            unset($data['delete_existing_image']);
            if ($oldDefinition->image) {

                if (Storage::disk('public')->exists($oldDefinition->image)) {
                    Storage::disk('public')->delete($oldDefinition->image);
                }
            }
        }
        if (!$data['image'] && $data['delete_existing_image']) {
            unset($data['delete_existing_image']);
            if ($oldDefinition->image) {

                if (Storage::disk('public')->exists($oldDefinition->image)) {
                    Storage::disk('public')->delete($oldDefinition->image);
                }
            }
        }else{
            unset($data['delete_existing_image']);
            unset($data['image']);
        }

       
        return $this->model->where('id', $id)->update($data);
    }

    public function all()
    {
        return $this->model->all();
    }

    public function countTotalDefinitions()
    {
        return $this->model->count();
    }

    public function delete($id)
    {
        $definition = $this->find($id);
        if ($definition->image) {
            if (Storage::disk('public')->exists($definition->image)) {
                Storage::disk('public')->delete($definition->image);
            }
        }
        return $this->model->where('id', $id)->delete();
    }
}
