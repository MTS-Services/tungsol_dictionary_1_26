<?php

use App\Http\Controllers\Api\SearchController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group.
|
*/

// Public search routes - no authentication required
Route::prefix('search')->group(function () {
    Route::get('/', [SearchController::class, 'search'])->name('search');
    Route::get('/suggestions', [SearchController::class, 'suggestions'])->name('search.suggestions');
    Route::get('/trending', [SearchController::class, 'trending'])->name('search.trending');
    Route::post('/track-click/{id}', [SearchController::class, 'trackWordClick'])->name('search.track-click');
});



//Include Frontend Route

include __DIR__.'/frontend.php';
include __DIR__.'/admin.php';
include __DIR__.'/user.php';
include __DIR__.'/debug.php';