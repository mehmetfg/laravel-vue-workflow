<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/









Route::prefix("backend")->group(function () {



    Route::get("/calendar", "ArticleController@calendar");
    Route::get("/percent", "ArticleController@articlePercent");
    Route::get("/article/{article}", "ArticleController@show");
    Route::get("/articles", "ArticleController@index");
    Route::post("/article","ArticleController@store");
    Route::put("/article/{article}","ArticleController@update");
    Route::delete("/article/{article}","ArticleController@destroy");


    Route::get("/user", "userController@show");
    Route::get("/users", "userController@index");
    Route::post("/user","userController@store");
    Route::put("/user/{user}","userController@update");
    Route::delete("/user/{user}","userController@destroy");
    Route::post("/user/statusSetter/{user}","userController@statusSetter");

    Route::get("/transactions/{article}", "transactionController@index");
    Route::post("/transaction","transactionController@store");
    Route::put("/transaction/{transaction}","transactionController@update");
    Route::delete("/transaction/{transaction}","transactionController@destroy");

    Route::get("/deploys/{article}", "deployController@index");
    Route::post("/deploy","deployController@store");
    Route::post("/deploy/statusSetter/{deploy}","deployController@statussetter");
    Route::put("/deploy/{deploy}","deployController@update");
    Route::delete("/deploy/{deploy}","deployController@destroy");

    Route::get("/workorders", "WorkOrderController@index");
    Route::get("/workorder/{workOrder}", "WorkOrderController@show");
    Route::get("/workorder/product/{product}", "WorkOrderController@productWorkorder");
    Route::post("/workorder","WorkOrderController@store");
    Route::put("/workorder/{workOrder}","WorkOrderController@update");
    Route::delete("/workorder/{workOrder}","WorkOrderController@destroy");


    Route::get("/product/{product}", "productController@show");
    Route::get("/products/{type}", "productController@index");
    Route::post("/product","productController@store");
    Route::put("/product/{product}","productController@update");
    Route::delete("/product/{product}","productController@destroy");

    Route::get("/repairparts", "repairpartController@index");
    Route::get("/repairpart/{repairpart}", "repairpartController@show");
    Route::get("/repairparts/product/{product}", "repairpartController@indexforproduct");
    Route::get("/repairparts/workorder/{workOrder}", "repairpartController@indexforworkorder");
    Route::post("/repairpart","repairpartController@store");
    Route::put("/repairpart/{repairpart}","repairpartController@update");
    Route::delete("/repairpart/{repairpart}","repairpartController@destroy");

    Route::get("/institutions/{type}", "InstitutionController@index");

});

Route::get("/workorder/query", "WorkOrderController@query");
Route::post("/workorder/do_query", "WorkOrderController@queryDo");

Route::post('/login', 'auth\LoginController@authenticate');
Route::get('/login', 'Auth\LoginController@index')->name("login");
Route::get("/logout", "Auth\LoginController@logout");

Route::get('{any}', 'HomeController')->where('any', '(.*)');
