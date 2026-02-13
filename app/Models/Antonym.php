<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Antonym extends Model
{
    use HasFactory;

    protected $fillable = [
        'definition_id',
        'antonym_word_id',
        'relevance_score',
    ];

    protected function casts(): array
    {
        return [
            'relevance_score' => 'integer',
        ];
    }

    public function definition(): BelongsTo
    {
        return $this->belongsTo(Definition::class);
    }

    public function antonymWord(): BelongsTo
    {
        return $this->belongsTo(Word::class, 'antonym_word_id');
    }
}
