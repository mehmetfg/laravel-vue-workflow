<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    //
    public function index()
    {
        return response()->json(["model"=> User::all()]);

    }

    public function show()
    {
        return response()->json(["model"=> Auth()->user()]);
    }

    public function store(Request $request , User $user)
    {
        try{


            $user->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, User $user)
    {
        try{


            $user->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(User $user)
    {
        try{


            $user->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
    public function statusSetter(User $user, Request $request){

        $user->status=$request->status;

        try{


            $user->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }




    }
}
