<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Definition;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DefinitionController extends Controller
{

    public function __construct(private DataTableService $dataTableService) {}
    public function index()
    {

        $queryBody = Definition::query();
        
        $result = $this->dataTableService->process($queryBody, request(), [
                'searchable' => ['definition'],
                'sortable' => ['domain', 'region',  'created_at'],
            ]);

            return Inertia::render('admin/word-definition/index', [
                'word_definitions' => $result['data'],
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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
