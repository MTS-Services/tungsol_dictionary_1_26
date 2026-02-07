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
     
     public function home2(): Response
     {
          return Inertia::render('frontend/home2');
     }
     
     public function dictionary(): Response
     {
          return Inertia::render('frontend/dictionary');
     }

     public function thesaurus(): Response
     {
          return Inertia::render('frontend/thesaurus');
     }

     public function thesaurus2(): Response
     {
          return Inertia::render('frontend/thesaurus2');
     }

     public function game(): Response
     {
          return Inertia::render('frontend/game');
     }

     public function game2(): Response
     {
          return Inertia::render('frontend/game2');
     }
     
     public function resetPassword(): Response
     {
          return Inertia::render('frontend/reset-password');
     }
     
     public function resetPasswordSuccessful(): Response
     {
          return Inertia::render('frontend/PasswordReset-Successful');
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
