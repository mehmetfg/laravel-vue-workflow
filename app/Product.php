<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
protected $fillable=[
        "type",
        "name",
        "serial",
        "brand",
        "model",
        "tag",
        "description",
        "quentity",
];
public  function workorders(){

    return $this->hasMany("App\WorkOrder");
}
    public  function workorderWithTag($tag){

        return $this->hasMany("App\WorkOrder")->where("products.tag", $tag);
    }
    public  function repairparts(){

    return $this->hasMany("App\RepairPart");
    }
}
