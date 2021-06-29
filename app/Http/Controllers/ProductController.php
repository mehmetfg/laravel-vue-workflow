<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index($type)
    {


        $query=" type=".$type;
        if(!is_null(request("tag"))){

            $query .=" and  tag=".request("tag");
        }
        if(!is_null(request("serial"))){

            $query .=" and  serial=".request("serial");
        }
        if(!is_null(request("model"))){

            $query .=" and  (brand like  '%".request("model")."%'  or  model like '%".request("model")."%' )";
        }




        return response()->json(["model"=> Product::whereRaw($query)->limit(10)->get()]);

    }

    public function show(Product $product)
    {
        return response()->json(["model"=> $product]);
    }

    public function store(Request $request , Product $product)
    {
        try{


            $product->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, Product $product)
    {
        try{


            $product->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(Product $product)
    {
        try{


            $product->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
}
