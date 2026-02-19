<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactUsController extends Controller
{
    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        $queryBody = Contact::query();

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'email', 'subject', 'message'],
            'sortable' => ['id', 'name', 'email', 'subject', 'message', 'created_at'],
        ]);

        return Inertia::render('admin/contact-us/index', [
            'contactUs' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    public function show($id): Response
    {

        $contact = Contact::findOrFail($id);

        return Inertia::render('admin/contact-us/show', [
            'contact' => $contact,
        ]);
    }

    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return redirect()->route('admin.cu.contact-us.index')->with('success', 'Contact deleted successfully.');
    }
}
