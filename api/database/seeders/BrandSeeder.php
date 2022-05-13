<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the brand seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            'Nike',
            'adidas'
        ];

        foreach($brands as $brand) {
            $new_brand = Brand::create(['name' => $brand]);
        }
    }
}
