<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class CategoryManagementController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = Category::with('parent');

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'description'],
            'sortable' => ['id', 'name', 'created_at'],
        ]);

        return Inertia::render('admin/category-management/index', [
            'categories' => $result['data'],
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
        $categories = Category::select('id', 'name')->whereNull('parent_id')->get();

        return Inertia::render('admin/category-management/create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150', 'unique:categories,name'],
            'description' => ['nullable', 'string'],
            'parent_id' => ['nullable', 'exists:categories,id'],
        ]);

        $data['slug'] = Str::slug($data['name']);

        Category::create($data);

        return redirect()->route('admin.cm.categories.index')->with('success', 'Category created successfully.');
    }

    public function edit(string $id): Response
    {
        $category = Category::with('parent')->findOrFail($id);
        $categories = Category::select('id', 'name')->whereNull('parent_id')->where('id', '!=', $id)->get();

        return Inertia::render('admin/category-management/edit', [
            'category' => $category,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);

        $data = $request->validate([
            'name' => ['required', 'string', 'max:150', 'unique:categories,name,' . $id],
            'description' => ['nullable', 'string'],
            'parent_id' => ['nullable', 'exists:categories,id'],
        ]);

        $data['slug'] = Str::slug($data['name']);

        $category->update($data);

        return back()->with('success', 'Category updated successfully.');
    }

    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return back()->with('success', 'Category deleted successfully.');
    }
}
