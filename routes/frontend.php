<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;


Route::controller(FrontendController::class)->group(function () {

        Route::get('/', 'index')->name('home');
        Route::get('/home2', 'home2')->name('home2');
        Route::get('/home1', 'home1')->name('home1');
        Route::get('/dictionary', 'dictionary')->name('dictionary'); 
        Route::get('/games', 'game')->name('game');
        Route::get('/games2', 'game2')->name('game2');
        Route::get('/reset-password', 'resetPassword')->name('reset-password');
        Route::get('/reset-password-successful', 'resetPasswordSuccessful')->name('reset-password-successful'); 
        Route::get('/about', 'about')->name('about');
        Route::get('/contact', 'contact')->name('contact');
        Route::post('/contact-submit', 'contactSubmit')->name('contact.submit');
        Route::get('/admin-dashboard', 'adminDashboard')->name('admin-dashboard');
        Route::get('/admin-dashboard2', 'adminDashboard2')->name('admin-dashboard2');
        Route::get('/word/{slug}', 'word')->name('word');

    });
