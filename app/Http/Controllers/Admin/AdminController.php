<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Concerns\PasswordValidationRules;
use App\Models\Contact;
use App\Services\DefinitionService;
use App\Services\SearchService;
use App\Services\WordService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    use PasswordValidationRules;
    //

    public function __construct(
        protected DataTableService $dataTableService,
        protected WordService $wordService,
        protected SearchService $searchService,
        protected DefinitionService $definitionService,
        ){}

    public function index(): Response
    {

        $totalInquiries = Contact::count();



        $totalWords = $this->wordService->countTotalWords();
       $totalDefinitions = $this->definitionService->countTotalDefinitions();
       $searchTrends = $this->wordService->getTrendingWords(20);

    //    dd($searchTrends);
        
        return Inertia::render('admin/index', [
            'totalWords' => $totalWords,
            'totalDefinitions' => $totalDefinitions,
            'totalInquiries' => $totalInquiries,
            'words' => $searchTrends
        ]);
    }

    public function allAdmin(): Response
    {
        $queryBody = Admin::query();


        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'email'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);


        return Inertia::render('admin/admin-management/all', [
            'admins' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    public function viewAdmin($id){

        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        return Inertia::render('admin/admin-management/view', [
            'admin' => $admin
        ]);
    }
    public function editAdmin($id){

        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        return Inertia::render('admin/admin-management/edit', [
            'admin' => $admin
        ]);
    }

    public function createAdmin()
    {
        return Inertia::render('admin/admin-management/create');
    }

    public function storeAdmin(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique(Admin::class)],
            'password' => $this->passwordRules(),
        ]);

        Admin::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return redirect()->route('admin.all')->with('success', 'Admin created successfully.');
    }

    public function updateAdmin(Request $request){

     $data = $request->validate([
        'name' => ['required', 'string', 'max:255'],
     ]);

      $admin = Admin::find($request->id);
      $admin->update($data);

      return back()->with('success', 'Admin updated successfully.');
    }
    public function deleteAdmin($id){
        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        $admin->forceDelete();
        return back()->with('success', 'Admin deleted successfully.');
    }
}
