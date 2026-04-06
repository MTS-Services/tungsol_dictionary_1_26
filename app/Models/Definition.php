<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Definition extends Model
{
    use HasFactory;

    protected $fillable = [
        'word_entry_id',
        'definition',
        'sort_order',
        'register',
        'domain',
        'region',
        'usage_note',
        'video_url',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
        ];
    }

    public function wordEntry(): BelongsTo
    {
        return $this->belongsTo(WordEntry::class);
    }

    public function examples(): HasMany
    {
        return $this->hasMany(Example::class);
    }

    public function synonyms(): HasMany
    {
        return $this->hasMany(Synonym::class);
    }

    public function antonyms(): HasMany
    {
        return $this->hasMany(Antonym::class);
    }

    public function getImageUrlAttribute(): ?string
    {
       if(!$this->image) {
         return null;
       }
      if(Str::startsWith($this->image, 'http') || Str::startsWith($this->image, 'https')) {
        return $this->image;
      }
      
      return Storage::url($this->image);
    }

    protected $appends = ['image_url'];
}
