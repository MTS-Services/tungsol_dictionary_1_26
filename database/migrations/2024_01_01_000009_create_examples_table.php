<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('examples', function (Blueprint $table) {
            $table->id();
            $table->foreignId('definition_id')
                  ->constrained('definitions')
                  ->cascadeOnDelete();
            $table->text('sentence')->comment('Example usage sentence');
            $table->string('source')->nullable()->comment('Book or publication title');
            $table->string('author')->nullable()->comment('Attribution author name');
            $table->smallInteger('year')->nullable()->comment('Year of the citation');
            $table->unsignedTinyInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index('definition_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('examples');
    }
};
