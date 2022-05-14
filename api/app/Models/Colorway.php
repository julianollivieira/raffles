<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Colorway extends Model
{
    use Uuids;

    /**
     * Get the sneakers with this colorway.
     */
    public function sneakers()
    {
        return $this->hasMany(Sneaker::class);
    }
}
