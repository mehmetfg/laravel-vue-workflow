<?php

namespace App\Http\Controllers;

use App\Institution;
use Illuminate\Http\Request;

class InstitutionController extends Controller
{
    //
    public function index($type){

        return response()->json(["model"=> Institution::where("type", $type)->get()]);

    }
}
