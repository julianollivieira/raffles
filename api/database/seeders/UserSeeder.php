<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the user seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
    }
}
