<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    //
    protected $fillable=[
        "definition",
        "description",
        "article_id",
        "user_id",

    ];

    public function article()
    {
        return $this->belongsTo("App\Article");
    }

}
