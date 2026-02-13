<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;

class LanguageManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = Language::query();

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'code'],
            'sortable' => ['id', 'name', 'code', 'created_at'],
        ]);

        return Inertia::render('admin/language-management/index', [
            'languages' => $result['data'],
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
        return Inertia::render('admin/language-management/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => ['required', 'string', 'max:10', 'unique:languages,code'],
            'name' => ['required', 'string', 'max:100'],
        ]);

        Language::create($data);

        return redirect()->route('admin.lm.languages.index')->with('success', 'Language created successfully.');
    }

    public function edit(string $id): Response
    {
        $language = Language::findOrFail($id);

        return Inertia::render('admin/language-management/edit', [
            'language' => $language
        ]);
    }

    public function update(Request $request, string $id)
    {
        $language = Language::findOrFail($id);

        $data = $request->validate([
            'code' => ['required', 'string', 'max:10', 'unique:languages,code,' . $id],
            'name' => ['required', 'string', 'max:100'],
        ]);

        $language->update($data);

        return back()->with('success', 'Language updated successfully.');
    }

    public function destroy(string $id)
    {
        $language = Language::findOrFail($id);
        $language->delete();

        return back()->with('success', 'Language deleted successfully.');
    }
}
