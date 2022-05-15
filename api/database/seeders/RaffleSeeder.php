<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Store;
use App\Models\Sneaker;
use App\Models\Raffle;
use Carbon\Carbon;

class RaffleSeeder extends Seeder
{
    /**
     * Run the raffle seeds.
     *
     * @return void
     */
    public function run()
    {
        $naked = Store::where('name', 'NAKED')->first();
        $afew = Store::where('name', 'AFEW')->first();
        $stress = Store::where('name', 'STRESS95')->first();
        $titolo = Store::where('name', 'TITOLO')->first();

        $zebra = Sneaker::where('name', 'Zebra')->first();
        $waveRunner = Sneaker::where('name', 'Wave Runner')->first();
        $unionGuavaIce = Sneaker::where('name', 'Union Guava Ice')->first();
        $offWhiteSail = Sneaker::where('name', 'Off-White Sail')->first();

        $raffles = [[
            'store_id' => $naked->id,
            'sneaker_id' => $zebra->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $afew->id,
            'sneaker_id' => $waveRunner->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $stress->id,
            'sneaker_id' => $unionGuavaIce->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $titolo->id,
            'sneaker_id' => $offWhiteSail->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ]];

        foreach($raffles as $raffle) {
            Raffle::create( $raffle);
        }
    }
}