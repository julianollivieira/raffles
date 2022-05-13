<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sneakers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('sku');
            $table->uuid('brand_id');
            $table->uuid('model_id');
            $table->string('name');
            $table->uuid('colorway_id');
            $table->decimal('retail_price', 8, 2);
            $table->timestamps();

            $table->foreign('brand_id')->references('id')->on('brands');
            $table->foreign('model_id')->references('id')->on('models');
            $table->foreign('colorway_id')->references('id')->on('colorways');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sneakers');
    }
};
