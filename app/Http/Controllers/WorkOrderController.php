<?php

namespace App\Http\Controllers;

use App\Product;
use App\WorkOrder;
use Illuminate\Http\Request;

class WorkOrderController extends Controller
{
    //
    public function index()
    {
        return response()->json(["model"=> WorkOrder::all()]);

    }

    public function show(WorkOrder $workOrder)
    {
        return response()->json(["model"=> $workOrder]);
    }
    public function productWorkorder(Product $product)
    {

        return response()->json(["model"=> $product->workorders]);
    }

    public function query(){

        return view("search");


    }
    public function queryDo(Request $request){

        $model=new WorkOrder();

        return view("workorder")->with("model", $model->productWithTag($request->tag));


    }

    public function store(Request $request , WorkOrder $workOrder)
    {
        try{


            $workOrder->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, WorkOrder $workOrder)
    {
        try{


            $workOrder->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(WorkOrder $workOrder)
    {
        try{


            $workOrder->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }

}
