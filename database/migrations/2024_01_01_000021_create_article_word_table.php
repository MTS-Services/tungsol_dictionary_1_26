<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_word', function (Blueprint $table) {
            $table->foreignId('article_id')
                  ->constrained('articles')
                  ->cascadeOnDelete();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();

            $table->primary(['article_id', 'word_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('article_word');
    }
};
