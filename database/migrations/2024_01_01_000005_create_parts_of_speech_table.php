<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parts_of_speech', function (Blueprint $table) {
            $table->tinyIncrements('id');
            $table->string('name', 50)->unique()->comment('e.g. noun, verb, adjective');
            $table->string('abbreviation', 10)->comment('e.g. n., v., adj.');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('parts_of_speech');
    }
};
