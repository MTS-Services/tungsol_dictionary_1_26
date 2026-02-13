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

     public function home1(): Response
     {
          return Inertia::render('frontend/home1');
     }
     
     public function dictionary(): Response
     {
          return Inertia::render('frontend/dictionary');
     }
     
     public function adminDashboard(): Response
     {
          return Inertia::render('frontend/admin-dashboard');
     }

      

     public function thesaurus2(): Response
     {
          return Inertia::render('frontend/thesaurus2');
     }

     public function adminDashboard2(): Response
     {
          return Inertia::render('frontend/admin-dashboard2');
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


     public function about(): Response
     {
          return Inertia::render('frontend/about');
     }

     public function contact(): Response
     {
          return Inertia::render('frontend/contact');
     }
     
}
