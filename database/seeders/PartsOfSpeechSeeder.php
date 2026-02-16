<?php

namespace Database\Seeders;

use App\Models\PartOfSpeech;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PartsOfSpeechSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PartOfSpeech::insert([
            [
                'name' => 'Noun',
                'abbreviation' => 'n.',
            ],
            
            [
                'name' => 'Verb',
                'abbreviation' => 'v.',
            ],
            
            [
                'name' => 'Adjective',
                'abbreviation' => 'adj.',
            ],
            
            [
                'name' => 'Adverb',
                'abbreviation' => 'adv.',
            ],
            
            [
                'name' => 'Preposition',
                'abbreviation' => 'prep.',
            ],
            
            [
                'name' => 'Conjunction',
                'abbreviation' => 'conj.',
            ],
            
            [
                'name' => 'Interjection',
                'abbreviation' => 'interj.',
            ]
        ]);
    }
}
