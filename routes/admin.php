<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ArticleManagementController;
use App\Http\Controllers\Admin\CategoryManagementController;
use App\Http\Controllers\Admin\DefinitionController;
use App\Http\Controllers\Admin\ExampleManagementController;
use App\Http\Controllers\Admin\LanguageManagementController;
use App\Http\Controllers\Admin\PartOfSpeechManagementController;
use App\Http\Controllers\Admin\SynonymManagementController;
use App\Http\Controllers\Admin\AntonymManagementController;
use App\Http\Controllers\Admin\UserManagementController;
use App\Http\Controllers\Admin\WordEntriesController;
use App\Http\Controllers\Admin\WordManagmentController;
use App\Http\Controllers\Admin\WordOfTheDayManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Guest Admin Routes
    |--------------------------------------------------------------------------
    */
    Route::middleware('guest:admin')->group(function () {
        Route::get('login', [AdminAuthController::class, 'showLogin'])->name('login');
        Route::post('login', [AdminAuthController::class, 'login'])->name('login.post');
    });

    /*
    |--------------------------------------------------------------------------
    | Authenticated Admin Routes
    |--------------------------------------------------------------------------
    */
    Route::middleware('auth:admin')->group(function () {

        Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');

        Route::get('all', [AdminController::class, 'allAdmin'])->name('all');

        Route::get('create', [AdminController::class, 'createAdmin'])->name('create');
        Route::post('store', [AdminController::class, 'storeAdmin'])->name('store');

        Route::get('view/{admin}', [AdminController::class, 'viewAdmin'])->name('view');
        Route::get('edit/{admin}', [AdminController::class, 'editAdmin'])->name('edit');

        Route::put('update/{admin}', [AdminController::class, 'updateAdmin'])->name('update');
        Route::delete('delete/{admin}', [AdminController::class, 'deleteAdmin'])->name('delete');

        Route::post('logout', [AdminAuthController::class, 'logout'])->name('logout');


        // User Management Routes
        Route::prefix('user-management' )->name('um.')->group(function () {
            Route::resource( 'users',UserManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        // Language Management Routes
        Route::prefix('language-management' )->name('lm.')->group(function () {
            Route::resource( 'languages',LanguageManagementController::class)->only('index','create', 'store', 'show',  'edit', 'update', 'destroy');
        });

        // Part of Speech Management Routes
        Route::prefix('part-of-speech-management' )->name('posm.')->group(function () {
            Route::resource( 'parts-of-speech',PartOfSpeechManagementController::class)->only('index','create', 'store', 'show', 'edit', 'update', 'destroy');
        });

        // Word Management Routes
        Route::prefix('word-management' )->name('wm.')->group(function () {
            Route::resource( 'words',WordManagmentController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });
         // Word Entries Routes
        Route::prefix('word-management' )->name('wm.')->group(function () {
            Route::resource( 'words-entries',WordEntriesController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });
        // Word Defination Routes
        Route::prefix('word-management' )->name('wm.')->group(function () {
            Route::resource( 'definitions',DefinitionController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

         Route::prefix('example-management' )->name('em.')->group(function () {
            Route::resource( 'examples',ExampleManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        Route::prefix('synonym-management' )->name('sm.')->group(function () {
            Route::resource( 'synonyms',SynonymManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        Route::prefix('related-word-management' )->name('rwm.')->group(function () {
            Route::resource( 'related-words',\App\Http\Controllers\Admin\RelatedWordManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        Route::prefix('antonym-management' )->name('am.')->group(function () {
            Route::resource( 'antonyms',AntonymManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        // Category Management Routes
        Route::prefix('category-management' )->name('cm.')->group(function () {
            Route::resource( 'categories',CategoryManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        // Article Management Routes
        Route::prefix('article-management' )->name('am.')->group(function () {
            Route::resource( 'articles',ArticleManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });

        // Word of the Day Management Routes
        Route::prefix('word-of-the-day-management' )->name('wotdm.')->group(function () {
            Route::resource( 'word-of-the-day',WordOfTheDayManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });
    });

});
