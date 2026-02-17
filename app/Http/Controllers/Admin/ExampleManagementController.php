<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DefinitionService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExampleManagementController extends Controller
{
    public function __construct(protected DefinitionService $definitionService)
    {
       
    }
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        //

        return Inertia::render('admin/example-management/index');
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
