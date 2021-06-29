
<!DOCTYPE html>

<html lang="tr" >
<!-- begin::Head -->
<head>

    <meta charset="utf-8" />
    <title>
        Gaziantep İl Sağlık Müdürlüğü  | Bilgi Sistemleri
    </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Latest updates and statistic charts">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--begin::Web font -->
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>
    <!--end::Web font -->
    <!--begin::Base Styles -->
    <link href="/assets/vendors/base/vendors.bundle.css" rel="stylesheet" type="text/css" />
    <link href="/assets/demo/default/base/style.bundle.css" rel="stylesheet" type="text/css" />
    <script src="/assets/demo/default/custom/components/base/jquery.min.js" type="text/javascript"></script>
    <script src="/assets/demo/default/custom/components/base/sweetalert2.js" type="text/javascript"></script>
    <!--end::Base Styles -->
    <link rel="shortcut icon" href="/assets/demo/default/media/img/logo/favicon.png" />
</head>
<!-- end::Head -->
<!-- end::Body -->
<body class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default"  >
<!-- begin:: Page -->
<div class="m-grid m-grid--hor m-grid--root m-page">
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2"
         id="m_login" style="background-image: url(/assets/app/media/img//bg/bg-3.jpg);">
        <div class="m-grid__item m-grid__item--fluid	m-login__wrapper">
            <div class="m-login__container" style="width: 600px !important;">
                <div class="m-login__logo">
                    <a href="#">
                        <img src="/assets/image/sblogo.png">
                    </a>
                </div>
                <div class="m-login__signin" >
                    <div class="m-login__head">
                        <h5 class="m-login__title">


                            <p><span class="alert-primary alert" >Cihaz Durum Sorgulama Ekranı
                             </span></p>
                            <p>  <span class="badge-primary badge" > {{request("tag")}}</span></p>
                        </h5>
                    </div>

                    <div class="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
                        <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                                <div class="m-portlet__head-title">
                                    <img src="/assets/app/media/img/client-logos/logo3.png" alt="">  <h3 class="m-portlet__head-text">
                                        Cihaz Bilgileri
                                    </h3>
                                </div>
                            </div>

                        </div>
                        <div class="m-portlet__body">
                            <!--begin::Widget5-->
                            <div class="m-widget4">


                                    <div class="m-widget4__item">

                                        <div class="m-widget4__info">
													<span class="m-widget4__title">
                                                        Cihaz Adı:

													</span>
                                            <br>
                                            <span class="m-widget4__sub">

													</span>
                                        </div>
                                        <span class="m-widget4__ext">
													<span class="m-widget4__number m--font-primary">
														{{$model->name}}
													</span>
												</span>
                                    </div>
                                <div class="m-widget4__item">
                                    <div class="m-widget4__img m-widget4__img--logo">

                                    </div>
                                    <div class="m-widget4__info">
													<span class="m-widget4__title">
                                                        Cihaz Adı /Seri:

													</span>
                                        <br>
                                        <span class="m-widget4__sub">

													</span>
                                    </div>
                                    <span class="m-widget4__ext">
													<span class="m-widget4__number m--font-primary">
                         {{$model->serial}}
													</span>
												</span>
                                </div>
                                <div class="m-widget4__item">
                                    <div class="m-widget4__img m-widget4__img--logo">

                                    </div>
                                    <div class="m-widget4__info">
													<span class="m-widget4__title">
                                                        Tarih:

													</span>
                                        <br>
                                        <span class="m-widget4__sub">

													</span>
                                    </div>
                                    <span class="m-widget4__ext">
<span class="m-widget4__number m--font-primary">
														{{date_format(date_create($model->date), "d.m.Y")}}
</span>
												</span>
                                </div>

                                <div class="m-widget4__item">
                                    <div class="m-widget4__img m-widget4__img--logo">

                                    </div>
                                    <div class="m-widget4__info">
													<span class="m-widget4__title">
                                                        Durum:

													</span>
                                        <br>
                                        <span class="m-widget4__sub">

													</span>
                                    </div>
                                    <span class="m-widget4__ext">
<span class="m-widget4__number m--font-danger">
													<?php switch($model->status){
                                            case "1":
                                                echo "Cihaz Onarımda";
                                                break;
                                            case "2":
                                                echo "Cihaz Serviste";
                                                break;
                                            case "3":
                                                echo "Cihaz Teslime Hazır";
                                                break;
                                            case "4":
                                                echo "Cihaz Hurdaya Ayırıldı";
                                                break;

                                        }?>
    </span>
												</span>
                                </div>

                            </div>
                            <!--end::Widget 5-->
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</div>
<!-- end:: Page -->
<!--begin::Base Scripts -->
<script src="/assets/vendors/base/vendors.bundle.js" type="text/javascript"></script>
<script src="/assets/demo/default/base/scripts.bundle.js" type="text/javascript"></script>
<!--end::Base Scripts -->
<!--begin::Page Snippets -->
<script src="/assets/snippets/pages/user/login.js" type="text/javascript"></script>
<!--end::Page Snippets -->
</body>
<!-- end::Body -->
</html>
<?php



if(session("success")){

?>

<script>
    swal({
        position: 'center',
        type: 'success',
        title: 'İşlem Başarılı',
        text: '{{session("success")}}',
        showConfirmButton: false,
        timer: 1500
    })

</script>

<?php } if(session("error")) { ?>

<script>
    swal({
        position: 'left',
        type: 'error',
        title: 'İşlem Başarısız',
        text: '{{session("error")}}',
        showConfirmButton: false,
        timer: 1500
    })
</script>

<?php
} ?>
<script>

    @if(intval(session("credit"))<=0)
    $(".remove-ower").hide();
    $(".message-alert").show();
    @else
    $(".remove-ower").show();
    $(".message-alert").hide();
    @endif
</script>