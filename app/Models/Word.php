<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Word extends Model
{
    use HasFactory;

    protected $fillable = [
        'word',
        'slug',
        'language_id',
        'is_approved',
        'search_count',
    ];

    protected function casts(): array
    {
        return [
            'is_approved' => 'boolean',
            'search_count' => 'integer',
        ];
    }

    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    public function wordEntries(): HasMany
    {
        return $this->hasMany(WordEntry::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_word');
    }

    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'article_word');
    }

    public function bookmarks(): HasMany
    {
        return $this->hasMany(Bookmark::class);
    }

    public function wordListItems(): HasMany
    {
        return $this->hasMany(WordListItem::class);
    }

    public function wordOfTheDay(): HasMany
    {
        return $this->hasMany(WordOfTheDay::class);
    }

    public function relatedWords(): HasMany
    {
        return $this->hasMany(RelatedWord::class);
    }

    public function relatedFrom(): HasMany
    {
        return $this->hasMany(RelatedWord::class, 'related_word_id');
    }

    public function synonymDefinitions(): HasMany
    {
        return $this->hasMany(Synonym::class, 'synonym_word_id');
    }

    public function antonymDefinitions(): HasMany
    {
        return $this->hasMany(Antonym::class, 'antonym_word_id');
    }
}
