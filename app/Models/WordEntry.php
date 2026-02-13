<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WordEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'word_id',
        'part_of_speech_id',
        'sort_order',
        'etymology',
        'pronunciation_ipa',
        'pronunciation_audio',
        'syllables',
    ];

    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
        ];
    }

    public function word(): BelongsTo
    {
        return $this->belongsTo(Word::class);
    }

    public function partOfSpeech(): BelongsTo
    {
        return $this->belongsTo(PartOfSpeech::class);
    }

    public function definitions(): HasMany
    {
        return $this->hasMany(Definition::class);
    }
}
