<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    // fillable
    protected $fillable = [
        'title',
        'image',
        'description',
        'short_description',
    ];
    // belongsTo
}
