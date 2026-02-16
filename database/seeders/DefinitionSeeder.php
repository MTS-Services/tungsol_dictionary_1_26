<?php

namespace Database\Seeders;

use App\Models\Definition;
use Illuminate\Database\Seeder;

class DefinitionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Definition::insert([
            [
                'definition' => 'definition',
                'word_entry_id' => 1
            ]
        ]);
    }
}
