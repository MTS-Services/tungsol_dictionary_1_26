<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Example extends Model
{
    use HasFactory;

    protected $fillable = [
        'definition_id',
        'sentence',
        'source',
        'author',
        'year',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'year' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function definition(): BelongsTo
    {
        return $this->belongsTo(Definition::class);
    }
}
