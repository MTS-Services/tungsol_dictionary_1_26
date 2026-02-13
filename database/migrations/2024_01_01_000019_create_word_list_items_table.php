<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('word_list_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('word_list_id')
                  ->constrained('word_lists')
                  ->cascadeOnDelete();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->smallInteger('sort_order')->default(0)->comment('User-defined position in the list');
            $table->timestamp('created_at')->nullable();

            // A word can only appear once per list
            $table->unique(['word_list_id', 'word_id']);
            $table->index('word_list_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('word_list_items');
    }
};
