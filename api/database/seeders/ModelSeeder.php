<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
Use App\Models\Model;

class ModelSeeder extends Seeder
{
    /**
     * Run the model seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = [
            'adidas Yeezy Boost 700',
            'adidas Yeezy Boost 350 V2',
            'Jordan 4 Retro'
        ];

        foreach($models as $model) {
            Model::create(['name' => $model]);
        }
    }
}
