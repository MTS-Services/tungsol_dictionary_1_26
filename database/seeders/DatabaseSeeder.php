<?php

namespace Database\Seeders;

use App\Models\Word;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
       $this->call([
        UserSeeder::class,
        AdminSeeder::class,
        LanguageSeeder::class,
        PartsOfSpeechSeeder::class,
        WordSeeder::class

       ]);
    } 
}
