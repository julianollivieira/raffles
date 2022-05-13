<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;
use App\Models\Model;
use App\Models\Colorway;

class SneakerSeeder extends Seeder
{
    /**
     * Run the sneaker seeds.
     *
     * @return void
     */
    public function run()
    {
        $nike = Brand::where('name', 'Nike')->first();
        $adidas = Brand::where('name', 'adidas')->first();

        $yeezyBoost700 = Model::where('name', 'adidas Yeezy Boost 700')->first();
        $yeezyBoost350 = Model::where('name', 'adidas Yeezy Boost 350 V2')->first();
        $jordan4retro = Model::where('name', 'Jordan 4 Retro')->first();
        
        $white = Colorway::where('name', 'WHITE/CORE BLACK/RED')->first();
        $solidGray = Colorway::where('name', 'SOLID GREY/CHALK WHITE/CORE BLACK')->first();
        $guavaIce = Colorway::where('name', 'GUAVA ICE/LIGHT BONE-BRIGADE BLUE-LIGHT FUSION RED')->first();
        $sail = Colorway::where('name', 'SAIL/MUSLIN-WHITE-BLACK')->first();

        $sneakers = [[
            'sku' => 'CP9654',
            'brand_id' => $adidas->id,
            'model_id' => $yeezyBoost350->id,
            'colorway_id' => $white->id,
            'retail_price' => 220.00,
            'name' => 'Zebra',
        ], [
            'sku' => 'B75571',
            'brand_id' => $adidas->id,
            'model_id' => $yeezyBoost700->id,
            'colorway_id' => $solidGray->id,
            'retail_price' => 300.00,
            'name' => 'Wave Runner',
        ], [
            'sku' => 'DC9533-800',
            'brand_id' => $nike->id,
            'model_id' => $jordan4retro->id,
            'colorway_id' => $guavaIce->id,
            'retail_price' => 250.00,
            'name' => 'Union Guava Ice',
        ], [
            'sku' => 'CV9388-100',
            'brand_id' => $nike->id,
            'model_id' => $jordan4retro->id,
            'colorway_id' => $sail->id,
            'retail_price' => 200.00,
            'name' => 'Off-White Sail',
        ]];

        foreach($sneakers as $sneaker) {
            Sneaker::create($sneaker);
        }
    }
}
