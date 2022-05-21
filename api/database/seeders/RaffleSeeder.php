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
        $end = Store::where('name', 'END.')->first();

        $zebra = Sneaker::where('name', 'Zebra')->first();
        $waveRunner = Sneaker::where('name', 'Wave Runner')->first();
        $unionGuavaIce = Sneaker::where('name', 'Union Guava Ice')->first();
        $offWhiteSail = Sneaker::where('name', 'Off-White Sail')->first();

        $raffles = [[
            'store_id' => $end->id,
            'sneaker_id' => $zebra->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $end->id,
            'sneaker_id' => $waveRunner->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $end->id,
            'sneaker_id' => $unionGuavaIce->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ], [
            'store_id' => $end->id,
            'sneaker_id' => $offWhiteSail->id,
            'closes_on' => Carbon::now()->addWeeks(1),
        ]];

        foreach($raffles as $raffle) {
            Raffle::create( $raffle);
        }
    }
}
