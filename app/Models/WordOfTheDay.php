<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WordOfTheDay extends Model
{
    use HasFactory;

    protected $table = 'word_of_the_day';

    protected $fillable = [
        'word_id',
        'date',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
        ];
    }

    public function word(): BelongsTo
    {
        return $this->belongsTo(Word::class);
    }
}
