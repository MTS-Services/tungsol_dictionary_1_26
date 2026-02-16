<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Definition;
use App\Models\WordEntry;
use App\Services\DefinitionService;
use App\Services\DataTableService;
use App\Services\WordEntryService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DefinitionController extends Controller
{

    public function __construct(private DataTableService $dataTableService, protected WordEntryService $wordEntryService, protected DefinitionService $definitionService) {}
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
    public function create(): Response
    {


        $word_entries = WordEntry::all();
        $word_entries->load('word');

        return Inertia::render('admin/word-definition/create', [
            'word_entries' => $word_entries
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $data =   $request->validate([
            'word_entry_id' => ['required', 'exists:word_entries,id'],
            'definition' => ['required', 'string'],
            'register' => ['nullable', 'string'],
            'domain' => ['nullable', 'string'],
            'region' => ['nullable', 'string'],
            'usage_note' => ['nullable', 'string'],
        ]);

        $this->definitionService->create($data);

        return redirect()->route('admin.wm.definitions.index');
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
        $definition = $this->definitionService->find($id);
        if(!$definition){
            return redirect()->route('admin.wm.definitions.index');
        }
         $word_entries = WordEntry::all();
        $word_entries->load('word');
        return Inertia::render('admin/word-definition/edit', [
            'definition' => $definition,
            'word_entries' => $word_entries
        ]);
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
