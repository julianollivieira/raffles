<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Raffle extends Model
{
    use Uuids;

    /**
     * Get this raffle's store
     */
    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    /**
     * Get this raffle's sneaker
     */
    public function sneaker()
    {
        return $this->belongsTo(Sneaker::class);
    }
}
