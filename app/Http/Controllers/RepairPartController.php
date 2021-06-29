<?php

namespace App\Http\Controllers;

use App\Product;
use App\RepairPart;
use App\WorkOrder;
use Illuminate\Http\Request;

class RepairPartController extends Controller
{
    public function index()
    {
        return response()->json(["model"=> RepairPart::all()]);

    }

    public function show(RepairPart $repairpart)
    {
        return response()->json(["model"=> $repairpart]);
    }

    public function  indexForProduct(Product $product)
    {
        return response()->json(["model"=>$product->repairparts]);

    }
    public function  indexForWorkorder(WorkOrder $workOrder)
    {
        return response()->json(["model"=>$workOrder->repairparts]);

    }
    public function store(Request $request , RepairPart $repairpart)
    {
        try{


            $repairpart->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, RepairPart $repairpart)
    {
        try{


            $repairpart->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(RepairPart $repairpart)
    {
        try{


            $repairpart->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
}
