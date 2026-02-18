<?php

namespace App\Services;

use App\Models\Word;
use App\Models\SearchHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SearchService
{
    /**
     * Search words with pagination
     */
    public function searchWords(string $query, int $page = 1, int $perPage = 30, string $sort = 'popularity', string $order = 'desc'): array
    {
        $cacheKey = "search:" . md5($query . $page . $perPage . $sort . $order);
        
        return Cache::remember($cacheKey, 900, function () use ($query, $page, $perPage, $sort, $order) {
            $searchQuery = Word::query()
                ->where('is_approved', true)
                ->where(function ($q) use ($query) {
                    // Search in word field
                    $q->where('word', 'LIKE', "%{$query}%");
                    
                    // Search in related word entries if they exist
                    $q->orWhereHas('wordEntries', function ($subQuery) use ($query) {
                        $subQuery->where('definition', 'LIKE', "%{$query}%");
                    });
                });

            // Apply sorting
            switch ($sort) {
                case 'popularity':
                    $searchQuery->orderBy('search_count', $order);
                    break;
                case 'word':
                    $searchQuery->orderBy('word', $order);
                    break;
                case 'created_at':
                    $searchQuery->orderBy('created_at', $order);
                    break;
                default:
                    $searchQuery->orderBy('search_count', 'desc');
            }

            $results = $searchQuery->paginate($perPage, ['*'], 'page', $page);

            return [
                'data' => $results->getCollection()->map(function ($word) use ($query) {
                    return [
                        'id' => $word->id,
                        'word' => $word->word,
                        'slug' => $word->slug,
                        'definition' => $this->getWordDefinition($word),
                        'synonyms' => $this->getWordSynonyms($word),
                        'antonyms' => $this->getWordAntonyms($word),
                        'search_count' => $word->search_count,
                    ];
                })->toArray(),
                'current_page' => $results->currentPage(),
                'last_page' => $results->lastPage(),
                'per_page' => $results->perPage(),
                'total' => $results->total(),
                'from' => $results->firstItem(),
                'to' => $results->lastItem(),
                'has_more' => $results->hasMorePages(),
                'next_page_url' => $results->nextPageUrl(),
                'prev_page_url' => $results->previousPageUrl(),
            ];
        });
    }

    /**
     * Get search suggestions
     */
    public function getSuggestions(string $query, int $limit = 5): array
    {
        $cacheKey = "suggestions:" . md5($query . $limit);
        
        return Cache::remember($cacheKey, 300, function () use ($query, $limit) {
            return Word::where('is_approved', true)
                ->where('word', 'LIKE', $query . '%')
                ->orderBy('search_count', 'desc')
                ->limit($limit)
                ->pluck('word')
                ->toArray();
        });
    }

    /**
     * Record search history
     */
    public function recordSearchHistory(string $query, ?string $ipAddress = null, ?string $userAgent = null): void
    {
        try {
            SearchHistory::create([
                'query' => $query,
                'ip_address' => $ipAddress ?? request()->ip(),
                'user_agent' => $userAgent ?? request()->userAgent(),
                'searched_at' => now(),
            ]);
        } catch (\Exception $e) {
            // Log error but don't break the search functionality
            Log::warning('Failed to record search history: ' . $e->getMessage());
        }
    }

    /**
     * Increment word search count
     */
    public function incrementWordSearchCount(int $wordId): void
    {
        try {
            Word::where('id', $wordId)->increment('search_count');
        } catch (\Exception $e) {
            Log::warning('Failed to increment search count: ' . $e->getMessage());
        }
    }

    /**
     * Get word definition from word entries
     */
    private function getWordDefinition($word): string
    {
        if ($word->wordEntries && $word->wordEntries->isNotEmpty()) {
            return $word->wordEntries->first()->definition ?? 'No definition available';
        }
        
        return "Definition for {$word->word}";
    }

    /**
     * Get word synonyms
     */
    private function getWordSynonyms($word): array
    {
        if ($word->synonymDefinitions && $word->synonymDefinitions->isNotEmpty()) {
            return $word->synonymDefinitions->pluck('word')->toArray();
        }
        
        return [];
    }

    /**
     * Get word antonyms
     */
    private function getWordAntonyms($word): array
    {
        if ($word->antonymDefinitions && $word->antonymDefinitions->isNotEmpty()) {
            return $word->antonymDefinitions->pluck('word')->toArray();
        }
        
        return [];
    }

    /**
     * Get trending searches
     */
    public function getTrendingSearches(int $limit = 10): array
    {
        return Cache::remember('trending_searches', 3600, function () use ($limit) {
            return SearchHistory::select('query', DB::raw('COUNT(*) as search_count'))
                ->where('searched_at', '>=', now()->subDays(7))
                ->groupBy('query')
                ->orderBy('search_count', 'desc')
                ->limit($limit)
                ->pluck('query')
                ->toArray();
        });
    }
}
