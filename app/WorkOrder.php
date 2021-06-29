<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkOrder extends Model
{
    //
    protected $fillable=[
        "product_id",
        "user_id",
        "deliverer",
        "return_date",
        "status",
        "service_date",
        "service_return_date",
        "description",
        "repair_cost",
        "company",
        "authorized",
        "service_report",
        "institution_id"


    ];

    public function product()
    {
        return $this->belongsTo("App\Product");
    }
    public function repairparts()
    {
        return $this->hasMany("App\RepairPart");
    }
    public  function productWithTag($tag){


            return $this
                ->leftJoin('products', 'products.id', '=', 'work_orders.product_id')
                ->selectRaw("work_orders.status as status, work_orders.created_at as date,  (products.model+products.brand) as name, products.serial as serial")
                ->where("products.tag", $tag)
                ->latest('work_orders.created_at')
                ->first();

    }
}
