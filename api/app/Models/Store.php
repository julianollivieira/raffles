<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Store extends Model
{
    use Uuids;

    /**
     * Get the raffles with this store
     */
    public function raffles()
    {
        return $this->hasMany(Raffle::class);
    }
}
