<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RelatedWord extends Model
{
    use HasFactory;

    protected $fillable = [
        'word_id',
        'related_word_id',
        'relation_type',
    ];

    public function word(): BelongsTo
    {
        return $this->belongsTo(Word::class);
    }

    public function relatedWord(): BelongsTo
    {
        return $this->belongsTo(Word::class, 'related_word_id');
    }
}
