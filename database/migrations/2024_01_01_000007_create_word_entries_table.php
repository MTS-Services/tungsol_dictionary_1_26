<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('word_entries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('word_id')
                  ->constrained('words')
                  ->cascadeOnDelete();
            $table->unsignedTinyInteger('part_of_speech_id');
            $table->unsignedTinyInteger('sort_order')->default(0)->comment('Display order under the word');
            $table->text('etymology')->nullable()->comment('Word origin / history');
            $table->string('pronunciation_ipa')->nullable()->comment('IPA phonetic string e.g. /dɪkʃənri/');
            $table->string('pronunciation_audio', 500)->nullable()->comment('Path or URL to audio file');
            $table->string('syllables', 100)->nullable()->comment('e.g. dic·tion·ar·y');
            $table->timestamps();

            $table->index('word_id');
            $table->index('part_of_speech_id');

            $table->foreign('part_of_speech_id')
                  ->references('id')
                  ->on('parts_of_speech')
                  ->restrictOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('word_entries');
    }
};
