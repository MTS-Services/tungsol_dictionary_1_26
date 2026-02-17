<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DefinitionService;
use App\Services\SynonymService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SynonymManagementController extends Controller
{
    public function __construct(protected DefinitionService $definitionService, protected WordService $wordService, protected SynonymService $synonymsService)
    {
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/synonym-management/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $wordDefinitions = $this->definitionService->all();
        $words = $this->wordService->all();
        return Inertia::render('admin/synonym-management/create',[
            'WordDefinitions' => $wordDefinitions,
            'Words' => $words
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $data = $request->validate([
            'definition_id' => ['required', 'exists:word_entries,id'],
            'synonym_word_id' => ['required', 'exists:words,id'],
            'relevance_score' => ['required', 'integer', 'between:0,100'],
       ]);



       $this->synonymsService->create($data);

       return redirect()->route('admin.sm.synonyms.index');
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
