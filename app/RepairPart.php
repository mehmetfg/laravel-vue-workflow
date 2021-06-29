<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepairPart extends Model
{
    //

    protected $fillable=[

        "product_id",
        "work_order_id",
        "name",
        "description",
        "price",
        "quentity",

    ];
}
