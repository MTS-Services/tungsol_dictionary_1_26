<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookmarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->constrained('users')
                  ->cascadeOnDelete();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->text('note')->nullable()->comment('Personal user note on this word');
            $table->timestamps();

            // A user can only bookmark a specific word once
            $table->unique(['user_id', 'word_id']);
            $table->index('user_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookmarks');
    }
};
