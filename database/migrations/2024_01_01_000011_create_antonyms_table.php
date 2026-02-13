<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('antonyms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('definition_id')
                  ->constrained('definitions')
                  ->cascadeOnDelete();
            $table->foreignId('antonym_word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->unsignedTinyInteger('relevance_score')
                  ->default(100)
                  ->comment('0–100; higher = stronger antonym match');
            $table->timestamps();

            // A word can only be an antonym of a definition once
            $table->unique(['definition_id', 'antonym_word_id']);
            $table->index('definition_id');
            $table->index('antonym_word_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('antonyms');
    }
};
