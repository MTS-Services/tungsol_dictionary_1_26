<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UserManagementController;
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


        // User Managment Routes
        Route::prefix('user-management' )->name('um.')->group(function () {
            Route::resource( 'users',UserManagementController::class)->only('index','create', 'store', 'edit', 'update', 'destroy');
        });
    });

});
