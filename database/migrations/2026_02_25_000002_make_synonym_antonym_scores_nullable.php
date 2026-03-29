<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('synonyms', function (Blueprint $table) {
            $table->unsignedTinyInteger('relevance_score')->default(100)->nullable()->comment('0–100; higher = stronger synonym match')->change();
        });

        Schema::table('antonyms', function (Blueprint $table) {
            $table->unsignedTinyInteger('relevance_score')->default(100)->nullable()->comment('0–100; higher = stronger antonym match')->change();
        });
    }

    public function down(): void
    {
        Schema::table('synonyms', function (Blueprint $table) {
            $table->unsignedTinyInteger('relevance_score')->default(100)->nullable(false)->change();
        });

        Schema::table('antonyms', function (Blueprint $table) {
            $table->unsignedTinyInteger('relevance_score')->default(100)->nullable(false)->change();
        });
    }
};
