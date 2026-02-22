<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Jobs\ContactJob;
use App\Mail\ContactMail;
use App\Services\ContactService;
use App\Services\SearchService;
use App\Services\WordOfTheDayService;
use App\Services\WordService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    //
    public function __construct(
        protected ContactService $contactService,
        protected WordService $wordService,
        protected SearchService $searchService,
        protected WordOfTheDayService $wordOfTheDayService
    ) {}

    public function index(): Response
    {
        $trendingWords = $this->wordService->getTrendingWords();

        $wordOfTheDay = $this->wordOfTheDayService->getWordOfTheDay();
        if ($wordOfTheDay) {
            $wordOfTheDay->load(['word.wordEntries.partOfSpeech', 'word.wordEntries.definitions.examples']);
        }

        return Inertia::render('frontend/index', [
            'trendingWords' => $trendingWords,
            'wordOfTheDay' => $wordOfTheDay,
        ]);
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
        $trendingWords = $this->wordService->getTrendingWords();
        $popularSerach = $this->searchService->getPopularSerach(10);

        // dd($popularSerach);
        return Inertia::render('frontend/dictionary', [
            'trendingWords' => $trendingWords,
            'popularSerach' => $popularSerach,
        ]);
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

    public function contactSubmit(Request $request)
    {
        // Validate the request
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        $key = 'contact-form:'.$request->ip();

        if (RateLimiter::tooManyAttempts($key, 5)) {
            return back();
        }

        if (RateLimiter::remaining($key, 1) === 0) {
            $seconds = RateLimiter::availableIn($key);

            return back()->withErrors([
                'ip' => 'Please wait '.ceil($seconds / 60).' minutes before submitting again.',
            ]);
        }

        $this->contactService->create($data);

        // Send email
        // Mail::to('admin@example.com')->send(new ContactMail($data));

        // Dispatch job
        // ContactJob::dispatch($data);

        RateLimiter::hit($key, 3600);

        return back()->with('success', 'Contact form submitted successfully!');
    }

    public function word($slug)
    {

        $word = $this->wordService->find($slug, 'slug');

        $word->load([
            'relatedWords.relatedWord',
            'wordEntries.definitions.examples',
            'wordEntries.partOfSpeech',
            'wordEntries.definitions.synonyms.synonymWord',
            'wordEntries.definitions.antonyms.antonymWord',
        ]);

        // Transform word entries to include synonyms and antonyms arrays
        $word->wordEntries->each(function ($entry) {
            $synonyms = [];
            $antonyms = [];

            foreach ($entry->definitions as $definition) {
                foreach ($definition->synonyms as $synonym) {
                    if ($synonym->synonymWord) {
                        $synonyms[] = $synonym->synonymWord->word;
                    }
                }
                foreach ($definition->antonyms as $antonym) {
                    if ($antonym->antonymWord) {
                        $antonyms[] = $antonym->antonymWord->word;
                    }
                }
            }

            // Remove duplicates and add to entry
            $entry->synonyms = array_values(array_unique($synonyms));
            $entry->antonyms = array_values(array_unique($antonyms));
        });

        return Inertia::render('frontend/word', [
            'word' => $word,
        ]);
    }

    public function browseAlphabetically(Request $request, $letter, $page = null): Response
    {
        $page = (int) ($page ?: $request->get('page', 1));
        $perPage = (int) $request->get('per_page', 50);

        $wordsData = $this->wordService->getWordsByLetterInfo($letter, $page, $perPage);

        return Inertia::render('frontend/browse-alphabetically', [
            'letter' => $letter,
            'wordsData' => $wordsData,
            'page' => $page,
            'perPage' => $perPage,
        ]);
    }

    public function wordOfTheDay()
    {

        $trendingWords = $this->wordService->getTrendingWords();

        $wordOfTheDay = $this->wordOfTheDayService->getWordOfTheDay();

        if (! $wordOfTheDay) {
            return redirect()->route('home');
        }

        $wordOfTheDay->load(['word.wordEntries.partOfSpeech', 'word.wordEntries.definitions.examples']);

        return Inertia::render('frontend/word-of-the-day', [
            'wordOfTheDay' => $wordOfTheDay,
            'trendingWords' => $trendingWords,

        ]);
    }
}
