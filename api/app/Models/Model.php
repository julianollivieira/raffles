<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as EloquentModel;
use App\Traits\Uuids;

class Model extends EloquentModel
{
    use Uuids;

    /**
     * Get the sneakers with this model.
     */
    public function sneakers()
    {
        return $this->hasMany(Sneaker::class);
    }
}
