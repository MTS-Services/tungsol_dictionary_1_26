<?php

namespace Database\Seeders;

use App\Models\Word;
use Illuminate\Database\Seeder;

class WordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
    for($i=0; $i < 100; $i++)
        {
            Word::create([
                'word' => 'word' . $i,
                'language_id' => 1,
                'slug' => 'word' . $i,
                'is_approved' => true, 
            ]);
        }
    // Word::insert([
    //         [
    //             'word' => 'word',
    //             'language_id' => 1,

    //         ]
    //     ]);
    }
}
