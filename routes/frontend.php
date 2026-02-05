<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;


Route::controller(FrontendController::class)->group(function () {

        Route::get('/', 'index')->name('home');
        Route::get('/home2', 'home2')->name('home2');
        Route::get('/dictionary', 'dictionary')->name('dictionary');
        Route::get('/thesaurus', 'thesaurus')->name('thesaurus');
        Route::get('/thesaurus2', 'thesaurus2')->name('thesaurus2');    
        Route::get('/games', 'game')->name('game');
        Route::get('/games2', 'game2')->name('game2');
        Route::get('/learn', 'learn')->name('learn');
        Route::get('/about', 'about')->name('about');
        Route::get('/contact', 'contact')->name('contact');

    });
