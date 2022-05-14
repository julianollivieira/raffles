<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;
use App\Traits\Uuids;

class Sneaker extends EloquentModel
{
    use Uuids;

    /**
     * Get the raffles with this sneaker.
     */
    public function raffles()
    {
        return $this->hasMany(Raffle::class);
    }

    /**
     * Get this sneaker's brand
     */
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    /**
     * Get this sneaker's colorway
     */
    public function colorway()
    {
        return $this->belongsTo(Colorway::class);
    }

    /**
     * Get this sneaker's model
     */
    public function model()
    {
        return $this->belongsTo(Model::class);
    }
}
