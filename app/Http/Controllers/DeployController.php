<?php

namespace App\Http\Controllers;

use App\Article;
use App\Deploy;
use Illuminate\Http\Request;

class DeployController extends Controller
{
    //
    public function index(Article $article)
    {
        return response()->json(["model"=> $article->deploys]);

    }

    public function show(Deploy $deploy)
    {
        return response()->json(["model"=> $deploy]);
    }

    public function store(Request $request , Deploy $deploy)
    {
        try{


            $deploy->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, Deploy $deploy)
    {


        try{


            $deploy->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(Deploy $deploy)
    {
        try{


            $deploy->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
    public function statusSetter(Deploy $deploy, Request $request){

        $deploy->status=$request->status;

        try{


               $deploy->save();

                return  response()->json(__("messages.update"));

                }
            catch (Exception $e){

                echo  $e->getMessage();

                return  response()->json(__("messages.un_update"));
            }




    }
}
