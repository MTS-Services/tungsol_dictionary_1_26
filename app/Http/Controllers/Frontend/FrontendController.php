<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
     //

     public function index(): Response
     {
          return Inertia::render('frontend/index');
     }
     public function dictionary(): Response
     {
          return Inertia::render('frontend/dictionary');
     }

     public function thesaurus(): Response
     {
          return Inertia::render('frontend/thesaurus');
     }

     public function game(): Response
     {
          return Inertia::render('frontend/game');
     }

     public function learn(): Response
     {
          return Inertia::render('frontend/learn');
     }

     public function about(): Response
     {
          return Inertia::render('frontend/about');
     }

     public function contact(): Response
     {
          return Inertia::render('frontend/contact');
     }
     
}
