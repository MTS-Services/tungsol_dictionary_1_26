<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PartOfSpeech;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PartOfSpeechManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = PartOfSpeech::query();

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'abbreviation'],
            'sortable' => ['id', 'name', 'abbreviation', 'created_at'],
        ]);

        return Inertia::render('admin/part-of-speech-management/index', [
            'partsOfSpeech' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/part-of-speech-management/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:parts_of_speech,name'],
            'abbreviation' => ['required', 'string', 'max:10'],
        ]);

        PartOfSpeech::create($data);

        return redirect()->route('admin.posm.parts-of-speech.index')->with('success', 'Part of Speech created successfully.');
    }

    public function edit(string $id): Response
    {
        $partOfSpeech = PartOfSpeech::findOrFail($id);

        return Inertia::render('admin/part-of-speech-management/edit', [
            'partOfSpeech' => $partOfSpeech
        ]);
    }

    public function update(Request $request, string $id)
    {
        $partOfSpeech = PartOfSpeech::findOrFail($id);

        $data = $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:parts_of_speech,name,' . $id],
            'abbreviation' => ['required', 'string', 'max:10'],
        ]);

        $partOfSpeech->update($data);

        return back()->with('success', 'Part of Speech updated successfully.');
    }

    public function destroy(string $id)
    {
        $partOfSpeech = PartOfSpeech::findOrFail($id);
        $partOfSpeech->delete();

        return back()->with('success', 'Part of Speech deleted successfully.');
    }
}
