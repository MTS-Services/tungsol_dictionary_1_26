<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('definitions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('word_entry_id')
                  ->constrained('word_entries')
                  ->cascadeOnDelete();
            $table->text('definition')->comment('Full definition text');
            $table->unsignedTinyInteger('sort_order')->default(0)->comment('Order within the entry');
            $table->string('register', 50)->nullable()->comment('formal, informal, archaic, slang, etc.');
            $table->string('domain', 100)->nullable()->comment('Subject label e.g. Law, Medicine, Computing');
            $table->string('region', 100)->nullable()->comment('e.g. British English, North American');
            $table->text('usage_note')->nullable()->comment('Extra usage guidance or warnings');
            $table->timestamps();

            $table->index('word_entry_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('definitions');
    }
};
