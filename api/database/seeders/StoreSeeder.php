<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Store;

class StoreSeeder extends Seeder
{
    /**
     * Run the store seeds.
     *
     * @return void
     */
    public function run()
    {
        $stores = [
            'NAKED',
            'AFEW',
            'STRESS95',
            'TITOLO',
        ];

        foreach($stores as $store) {
            Store::create(['name' => $store]);
        }
    }
}
