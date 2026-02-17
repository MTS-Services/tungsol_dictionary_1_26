<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Example;
use App\Services\DataTableService;
use App\Services\DefinitionService;
use App\Services\ExampleService;
use Dflydev\DotAccessData\Data;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExampleManagementController extends Controller
{
    public function __construct(protected DefinitionService $definitionService, protected ExampleService $exampleService, protected DataTableService $dataTableService) {}
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $queryBody = Example::query();

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['sentence', 'source', 'author', 'year'],
            'sortable' => ['id', 'source', 'author', 'year', 'created_at'],
        ]);

        return Inertia::render('admin/example-management/index', [
            'examples' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // 
        $WordDefinitions = $this->definitionService->all();

        return Inertia::render('admin/example-management/create', [
            'WordDefinitions' => $WordDefinitions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data =  $request->validate([
            'definition_id' => 'required|integer',
            'sentence' => 'required|string|max:255',
            'source' => 'nullable|string|max:255',
            'author' => 'nullable|string|max:255',
            'year' => 'nullable',
        ]);

        if ($data['year']) {

            $data['year'] = date('Y', strtotime($request->year));
        }

        $this->exampleService->create($data);

        return redirect()->route('admin.em.examples.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $exmaple = $this->exampleService->find($id);
        $WordDefinitions = $this->definitionService->all();

        return Inertia::render('admin/example-management/edit', [
            'example' => $exmaple,
            'WordDefinitions' => $WordDefinitions
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $oldExample = $this->exampleService->find($id);

        if (!$oldExample) {
            return redirect()->route('admin.em.examples.index');
        }

        $data =  $request->validate([
            'definition_id' => 'required|integer',
            'sentence' => 'required|string|max:255',
            'source' => 'nullable|string|max:255',
            'author' => 'nullable|string|max:255',
            'year' => 'nullable',
        ]);

        if ($data['year']) {

            $data['year'] = date('Y', strtotime($request->year));
        }

        $this->exampleService->update($id, $data);

        return redirect()->route('admin.em.examples.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
