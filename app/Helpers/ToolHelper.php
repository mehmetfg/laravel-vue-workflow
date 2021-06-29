<?php
/**
 * Created by PhpStorm.
 * User: Mehmet F. GCGN
 * Date: 1.08.2019
 * Time: 14:26
 */

use App\Category;
use App\Classroom;
use App\Dealer;
use App\Student;
use \App\Teacher;
use App\Current;
use \Illuminate\Support\Facades\Auth;
/**
 * Created by PhpStorm.
 * User: Mehmet F. GCGN
 * Date: 17.05.2018
 * Time: 22:19
 */


function set_site_data(){

    $len=strlen(request()->getHost());
    $web=substr(request()->getHost(), 9, $len);
    $data=DB::table("Dealers")->where("domain", $web)->first();

    if($data)
    {
        return  session(["info" =>$data]);
    }else
    {
        return session(["info" =>   DB::table("Dealers")->first()]);

    }


}
function getSayi()
{
    return 5;
}
function sub_dealer_count($id)
{



    return Dealer::where("delaer_id", $id)->count();


}


function dealer_student_count($id)
{

     return Student::where("dealer_id", $id)->count();


}

function teacher_class_count($id)
{

   return Classroom::where("teacher_id", $id)->count();

}

function class_student_count($id)
{

    return Student::where("classroom_id")->count();


}

function dealer_name_list()
{

    $ok =     Dealer::select("name", "id")->where("type", 2)->get();
    if ($ok) {
        return $ok;
    }

}
function category_name($id)
{

}
function category_list()
{

        return Category::select("name", "id")->get();

}
function student_name($id)
{

    if (!empty(Student::where("id", $id)->first()->name)) {
        Student::where("id", $id)->first()->name;
    }
}

function dealer_credit_id($id)
{


    $alinan = Current::selectRaw("sum(quentity) as miktar")->whereRaw( "dealer_id=$id  and type=1")->first()->miktar;
    $harcanan =Current::selectRaw("sum(quentity) as miktar")->whereRaw( "dealer_id=$id  and type=0")->first()->miktar;

    return ($alinan - $harcanan);
}

function dealer_credit_session()
{


    $id =Auth::id();
    $type=Auth::user()->type;

    if($type=="1")
    {
        return 10000;
    }else
    {
        $alinan = Current::selectRaw("sum(quentity) as miktar")->whereRaw( "dealer_id=$id  and type=1")->first()->miktar;
        $harcanan =Current::selectRaw("sum(quentity) as miktar")->whereRaw( "dealer_id=$id  and type=0")->first()->miktar;

        return ($alinan - $harcanan);
    }

}

function student_credit()
{

    $id =request()->input("id");
    $finishdate = Student::where("id", $id)->first()->finishdate;
    $date = strtotime($finishdate);
    if ($finishdate > date("Y-m-d")) {

        return date("d-m-Y", $date);

    }


}

function dealer_sales()
{


    $id = session("id");
    $satis = $ci->db->query("select sum(total) as toplam from current  where dealer_id=$id  and type=0")->first()->toplam;


    return $satis;
}

function dealer_mount_sales()
{


    $id = session("id");
    $satis = DB::select("select sum(total) as toplam from current  where  create_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) and dealer_id=$id  and type=0")->fitst()->toplam;


    return $satis;
}

function student_with_mount_count($id)
{

    

    $baslangitarihi = date("Y-d-m");

    $finish_date = strtotime($baslangitarihi . "30 days");
    $bitistarihi = date('Y-m-d', $finish_date);

    if (!is_null($id)) {
        return DB::select("select id from student where create_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) and dealer_id=$id")->count();
    } else {

        return DB::select("select id from student where create_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)")->count();
    }


}
function student_count(){


    return Student::where("dealer_id", Auth::id())->count();
}
function student_count_dealer($id){


    return Student::where("dealer_id", $id)->count();
}
/**
 * @return mixed
 */
function teacher_count(){


    return Teacher::where("dealer_id", Auth::id())->count();
}
function classroom_count(){

   $teacher_id= Teacher::where("dealer_id", Auth::id())->first();

       if($teacher_id) {
           return Classroom::where("teacher_id", $teacher_id->id)->count();
       }

}
