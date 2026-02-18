<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('words', function (Blueprint $table) {
            $table->id();
            $table->string('word')->comment('The word itself');
            $table->string('slug')->unique()->comment('URL-friendly slug');
            $table->unsignedTinyInteger('language_id')->default(1);
            $table->boolean('is_approved')->default(false)->comment('Admin-approved flag');
            $table->unsignedBigInteger('search_count')->default(0)->comment('Lookup frequency counter');
            $table->timestamps();

            // Indexes
            $table->unique(['word', 'language_id']);
            $table->index(['language_id', 'is_approved']);
            $table->fullText('word')->comment('For autocomplete / fast search');

            // Foreign keys
            $table->foreign('language_id')
                  ->references('id')
                  ->on('languages')
                  ->restrictOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('words');
    }
};
