<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Lang;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Language::insert([
            [
                'name' => 'English',
                'code' => 'en-us',
            ], 
            
            [
                'name' => 'English',
                'code' => 'en-eng',
            ],
            
            [
                'name' => 'Russian',
                'code' => 'ru',
            ]
        ]);
    }
}
