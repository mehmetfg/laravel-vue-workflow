<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deploy extends Model
{
    //
    protected $fillable=[

        "date",
        "article_id",
        "status",
        "institution_id",
        "definition",
        "email"

    ];

    public function article()
    {
        return $this->belongsTo("App\Article");
    }
}
