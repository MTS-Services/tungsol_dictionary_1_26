<?php 

namespace App\Services;

use App\Models\WordOfTheDay;

class WordOfTheDayService
{
    public function getWordOfTheDay()
    {
        return WordOfTheDay::where('date', today())->first();
    }
}
