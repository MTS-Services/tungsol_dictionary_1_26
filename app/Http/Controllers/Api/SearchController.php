<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Word;
use App\Services\SearchService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class SearchController extends Controller
{
    protected SearchService $searchService;
    protected WordService $wordService;

    public function __construct(SearchService $searchService, WordService $wordService)
    {
        $this->searchService = $searchService;
        $this->wordService = $wordService;
    }

    /**
     * Search words with pagination
     */
    public function search(Request $request): JsonResponse
    {
        $request->validate([
            'q' => 'required|string|min:1|max:100',
            'page' => 'sometimes|integer|min:1',
            'per_page' => 'sometimes|integer|min:1|max:50',
            'sort' => 'sometimes|string|in:popularity,word,created_at',
            'order' => 'sometimes|string|in:asc,desc',
        ]);

        $query = $request->input('q');
        $page = $request->input('page', 1);
        $perPage = $request->input('per_page', 30);
        $sort = $request->input('sort', 'popularity');
        $order = $request->input('order', 'desc');

        // Record search history
        $this->searchService->recordSearchHistory($query);

        // Start timer for performance monitoring
        $startTime = microtime(true);

        try {
            // Get search results
            $results = $this->searchService->searchWords($query, $page, $perPage, $sort, $order);

            // Add performance metadata
            $results['meta'] = [
                'query' => $query,
                'search_time' => round(microtime(true) - $startTime, 3),
                'cache_ttl' => 900, // 15 minutes
            ];

            return response()->json($results);

        } catch (\Exception $e) {
            Log::error('Search error: ' . $e->getMessage(), [
                'query' => $query,
                'page' => $page,
                'user_id' => Auth::id(),
            ]);

            return response()->json([
                'error' => 'Search temporarily unavailable',
                'message' => 'Please try again later',
            ], 500);
        }
    }

    /**
     * Get search suggestions (autocomplete)
     */
    public function suggestions(Request $request): JsonResponse
    {
        $request->validate([
            'q' => 'required|string|min:1|max:50',
            'limit' => 'sometimes|integer|min:1|max:10',
        ]);

        $query = $request->input('q');
        $limit = $request->input('limit', 5);

        $suggestions = $this->searchService->getSuggestions($query, $limit);

        return response()->json([
            'suggestions' => $suggestions,
        ]);
    }

    /**
     * Get trending searches
     */
    public function trending(): JsonResponse
    {
        $trending = $this->searchService->getTrendingSearches(10);

        return response()->json([
            'trending' => $trending,
        ]);
    }

    /**
     * Increment word search count when word is clicked
     */
    public function trackWordClick(Request $request, int $id): RedirectResponse
    {
        try {
            $this->searchService->incrementWordSearchCount($id);
            $word = $this->wordService->find($id);
            return redirect()->route('word', $word->slug);
        } catch (\Exception $e) {
           abort(400);
        }
        
        return redirect()->route('word', $word->slug);
    }
}
