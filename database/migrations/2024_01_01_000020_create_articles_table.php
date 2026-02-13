<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 500)->comment('Article headline');
            $table->string('slug', 500)->unique()->comment('URL-friendly slug');
            $table->longText('body')->comment('Full article body — HTML or Markdown');
            $table->text('excerpt')->nullable()->comment('Short teaser shown in listings');
            $table->string('category', 100)->nullable()
                  ->comment('e.g. Writing Tips, Commonly Confused, Word Origins');
            $table->foreignId('author_id')
                  ->nullable()
                  ->constrained('users')
                  ->nullOnDelete();
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable()->comment('Scheduled or actual publish time');
            $table->timestamps();

            $table->index('author_id');
            $table->index('is_published');
            $table->index('published_at');
            $table->index('category');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
