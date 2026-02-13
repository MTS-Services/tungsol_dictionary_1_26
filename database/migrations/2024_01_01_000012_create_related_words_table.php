<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('related_words', function (Blueprint $table) {
            $table->id();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->foreignId('related_word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->string('relation_type', 50)
                  ->comment('e.g. derived, variant, homophone, compound, abbreviation');
            $table->timestamps();

            $table->unique(['word_id', 'related_word_id', 'relation_type']);
            $table->index('word_id');
            $table->index('related_word_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('related_words');
    }
};
