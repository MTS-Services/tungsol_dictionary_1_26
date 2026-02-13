<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('category_word', function (Blueprint $table) {
            $table->foreignId('category_id')
                  ->constrained('categories')
                  ->cascadeOnDelete();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->timestamp('created_at')->nullable();

            // Composite primary key — prevents duplicate pivots
            $table->primary(['category_id', 'word_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('category_word');
    }
};
