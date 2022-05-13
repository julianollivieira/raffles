<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Colorway;

class ColorwaySeeder extends Seeder
{
    /**
     * Run the colorway seeds.
     *
     * @return void
     */
    public function run()
    {
        $colorways = [
            'WHITE/CORE BLACK/RED',                                     // Zebra
            'SOLID GREY/CHALK WHITE/CORE BLACK',                        // Wave Runner
            'GUAVA ICE/LIGHT BONE-BRIGADE BLUE-LIGHT FUSION RED',       // Union Guava Ice
            'SAIL/MUSLIN-WHITE-BLACK'                                   // Off-White Sail
        ];

        foreach($colorways as $colorway) {
            Colorway::create(['name' => $colorway]);
        }
    }
}
