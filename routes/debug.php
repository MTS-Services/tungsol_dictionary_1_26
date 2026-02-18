<?php

use App\Models\Word;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Debug Routes
|--------------------------------------------------------------------------
|
| Temporary routes for debugging search functionality
|
*/

Route::get('/debug-search', function () {
    $data = [
        'total_words' => Word::count(),
        'approved_words' => Word::where('is_approved', true)->count(),
        'sample_words' => Word::where('is_approved', true)->limit(5)->pluck('word')->toArray(),
        'word0_search' => Word::where('is_approved', true)->where('word', 'like', '%word0%')->get()->toArray(),
        'all_word_variations' => Word::where('is_approved', true)->where('word', 'like', '%word%')->limit(10)->pluck('word')->toArray(),
        'raw_word0_check' => Word::where('word', 'word0')->get()->toArray(),
        'unapproved_word0' => Word::where('word', 'word0')->where('is_approved', false)->get()->toArray(),
    ];
    
    return response()->json($data, 200, [], JSON_PRETTY_PRINT);
});

Route::get('/debug-search/{term}', function ($term) {
    $results = Word::where('is_approved', true)
        ->where(function ($query) use ($term) {
            $query->where('word', 'LIKE', "%{$term}%")
                  ->orWhereHas('wordEntries', function ($subQuery) use ($term) {
                      $subQuery->where('definition', 'LIKE', "%{$term}%");
                  });
        })
        ->get()
        ->toArray();
    
    return response()->json([
        'search_term' => $term,
        'results_count' => count($results),
        'results' => $results
    ], 200, [], JSON_PRETTY_PRINT);
});

Route::get('/debug-simple/{term}', function ($term) {
    $simpleResults = Word::where('is_approved', true)
        ->where('word', 'LIKE', "%{$term}%")
        ->get()
        ->toArray();
    
    $exactResults = Word::where('is_approved', true)
        ->where('word', $term)
        ->get()
        ->toArray();
    
    return response()->json([
        'search_term' => $term,
        'like_results_count' => count($simpleResults),
        'like_results' => $simpleResults,
        'exact_results_count' => count($exactResults),
        'exact_results' => $exactResults,
    ], 200, [], JSON_PRETTY_PRINT);
});

Route::get('/debug-api/{term}', function ($term) {
    // Simulate the exact API call that the frontend makes
    $searchService = app(\App\Services\SearchService::class);
    
    try {
        $results = $searchService->searchWords($term, 1, 30, 'popularity', 'desc');
        return response()->json($results, 200, [], JSON_PRETTY_PRINT);
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ], 500);
    }
});

Route::get('/debug-direct/{term}', function ($term) {
    // Test the direct database query without the service
    try {
        $searchQuery = \App\Models\Word::query()
            ->where('is_approved', true)
            ->where(function ($q) use ($term) {
                $q->where('word', 'LIKE', "%{$term}%");
            });

        $results = $searchQuery->paginate(30, ['*'], 'page', 1);
        
        return response()->json([
            'data' => $results->getCollection()->toArray(),
            'current_page' => $results->currentPage(),
            'last_page' => $results->lastPage(),
            'per_page' => $results->perPage(),
            'total' => $results->total(),
        ], 200, [], JSON_PRETTY_PRINT);
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ], 500);
    }
});
