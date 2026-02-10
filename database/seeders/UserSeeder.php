<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert(
          [
              [
                'name' => 'User',
                'email' => 'user@dev.com',
                'username' => 'user',
                'password' => Hash::make('user@dev.com'),
            ],
            [
                'name' => 'User1',
                'email' => 'user1@dev.com',
                'username' => 'user1',
                'password' => Hash::make('user1@dev.com'),
            ]
          ]
        );

   
    }
}
