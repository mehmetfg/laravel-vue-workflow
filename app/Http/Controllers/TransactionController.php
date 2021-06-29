<?php

namespace App\Http\Controllers;

use App\Article;
use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    //
    public function index(Article $article)
    {
        return response()->json(["model"=> $article->transactions]);

    }

    public function show(Transaction $transaction)
    {
        return response()->json(["model"=> $transaction]);
    }

    public function store(Request $request , Transaction $transaction)
    {
        try{


            $transaction->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, Transaction $transaction)
    {
        try{


            $transaction->fill  ($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){



            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(Transaction $transaction)
    {
        try{


            $transaction->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
}
