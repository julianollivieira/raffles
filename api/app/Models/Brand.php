<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Brand extends Model
{
    use Uuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Get the sneakers with this brand.
     */
    public function sneakers()
    {
        return $this->hasMany(Sneaker::class);
    }
}
