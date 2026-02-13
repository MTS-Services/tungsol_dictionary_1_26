<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Synonym extends Model
{
    use HasFactory;

    protected $fillable = [
        'definition_id',
        'synonym_word_id',
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

    public function synonymWord(): BelongsTo
    {
        return $this->belongsTo(Word::class, 'synonym_word_id');
    }
}
