<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //

    protected $fillable=[
        "name",
        "barcode",
        "writer",
        "user_id",
        "date",
        "sender_date",
        "sender",
        "deploy_date",
        "description",
        "document",


    ];


    public function transactions()
    {
        return $this->hasMany("App\Transaction");
    }

    public function deploys()
    {
        return $this->hasMany("App\Deploy");
    }

    public function articlePercent()
    {
        return $this
            ->leftJoin('deploys', 'articles.id', '=', 'deploys.article_id')
            ->selectRaw("articles.id,articles.sender_date,articles.deploy_date,articles.name , COUNT(if(deploys.status='1', deploys.id, null)) AS counttrue, COUNT(if(deploys.status='0', deploys.id, null)) AS countfalse")
            ->groupBy("articles.id")
            ->get();
    }


}
