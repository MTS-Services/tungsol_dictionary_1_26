<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('definitions', function (Blueprint $table) {
            $table->unsignedTinyInteger('sort_order')->default(0)->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('definitions', function (Blueprint $table) {
            $table->unsignedTinyInteger('sort_order')->default(0)->nullable(false)->change();
        });
    }
};
