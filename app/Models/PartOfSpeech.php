<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PartOfSpeech extends Model
{
    use HasFactory;

    protected $table = 'parts_of_speech';

    protected $fillable = [
        'name',
        'abbreviation',
    ];

    public function wordEntries(): HasMany
    {
        return $this->hasMany(WordEntry::class);
    }
}
