<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{


    public function index()
    {
        return response()->json(["model"=> Article::all()]);

    }

    public function calendar()
    {

        foreach (Article::all() as $item){

            $data[]=array(
                "title"=> $item->name,
                "start"=>$item->deploy_date,
                "allDay"=> true,
                "stick"=> true,
                "backgroundColor"=>"#0092D0"
            );


            $data[]=array(
                "title"=>$item->name,
                "start"=>$item->sender_date,
                "allDay"=> true,
                "stick"=> true,
                "backgroundColor"=>"red"
            );
        }

        return response()->json(["model"=>$data]);


    }

    public function articlePercent()
    {

        $article=new Article;
               return response()->json(["model"=> $article->articlePercent()]);

    }
    public function show(Article $article)
    {
        return response()->json(["model"=> $article]);
    }

    public function store(Request $request , Article $article)
    {
        try{


            $article->create($request->all());

            return  response()->json(__("messages.add"));


        }
        catch (Exception $e){
            echo  $e->getMessage();
            return  response()->json(__("messages.un_add"));

        }


    }




    public function update(Request $request, Article $article)
    {
        try{


            $article->fill($request->all())->save();

            return  response()->json(__("messages.update"));

        }
        catch (Exception $e){

            echo  $e->getMessage();

            return  response()->json(__("messages.un_update"));
        }
    }

    public function destroy(Article $article)
    {
        try{


            $article->delete();


            return  response()->json(__("messages.delete"));


        }
        catch (Exception $e){
            echo  $e->getMessage();

            return  response()->json(__("messages.un_delete"));
        }
    }
}
