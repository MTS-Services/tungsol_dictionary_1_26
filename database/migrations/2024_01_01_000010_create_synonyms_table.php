<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('synonyms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('definition_id')
                  ->constrained('definitions')
                  ->cascadeOnDelete();
            $table->foreignId('synonym_word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->unsignedTinyInteger('relevance_score')
                  ->default(100)
                  ->comment('0–100; higher = stronger synonym match');
            $table->timestamps();

            // A word can only be a synonym of a definition once
            $table->unique(['definition_id', 'synonym_word_id']);
            $table->index('definition_id');
            $table->index('synonym_word_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('synonyms');
    }
};
