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
            [
                'name' => 'END.',
                'raffles_url' => 'https://launches.endclothing.com/',
                'code' => 'end_clothing'
            ]
        ];

        foreach ($stores as $store) {
            Store::create($store);
        }
    }
}
