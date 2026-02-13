<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('search_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->nullable()
                  ->constrained('users')
                  ->nullOnDelete()
                  ->comment('Nullable — tracks guest searches too');
            $table->string('query')->comment('The searched term');
            $table->string('ip_address', 45)->nullable()->comment('IPv4 or IPv6 address');
            $table->boolean('found')->default(true)->comment('Was a result found?');
            $table->timestamps();

            $table->index('user_id');
            $table->index('query');
            $table->index(['user_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('search_histories');
    }
};
