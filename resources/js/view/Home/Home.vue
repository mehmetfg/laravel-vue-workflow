<template>
    <div class="row">
        <div class="col-md-6">
    <div class="m-portlet m-portlet--creative m-portlet--first m-portlet--bordered-semi">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="flaticon-statistics"></i>
												</span>
                    <h3 class="m-portlet__head-text">

                        Yazılar ile ilgili işlemler
                    </h3>
                    <h2 class="m-portlet__head-label m-portlet__head-label--accent">
													<span>
													<i class="fa fa-files-o  fa-2x"></i>	Yazılar
													</span>
                    </h2>
                </div>
            </div>
            <div class="m-portlet__head-tools">

            </div>
        </div>
        <div class="m-portlet__body">

<deneme></deneme>
        </div>
    </div>
        </div>
        <div class="col-md-6">
            <div class="m-portlet m-portlet--creative m-portlet--first m-portlet--bordered-semi">
                <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="flaticon-statistics"></i>
												</span>
                            <h3 class="m-portlet__head-text">
                                Teknik Servis ile ilgili işlemler
                            </h3>
                            <h2 class="m-portlet__head-label m-portlet__head-label--warning">
													<span>
													<i class="m-menu__link-icon fa 	fa-user-md"></i>		Teknik Servis
													</span>
                            </h2>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">

                    </div>
                </div>
                <div class="m-portlet__body">

                    <deneme></deneme>
                </div>
            </div>

        </div>
        <div class="col-md-6">
            <div class="m-portlet m-portlet--creative m-portlet--first m-portlet--bordered-semi">
                <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="flaticon-statistics"></i>
												</span>
                            <h3 class="m-portlet__head-text">
                                Erişim Talebi ile ilgili işlemler
                            </h3>
                            <h2 class="m-portlet__head-label m-portlet__head-label--primary">
													<span>
														Erişim Talepleri
													</span>
                            </h2>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">

                    </div>
                </div>
                <div class="m-portlet__body">
                    <transition  name="page" mode="out-in" type="transition">
                    <deneme></deneme>
                    </transition>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="m-portlet m-portlet--creative m-portlet--first m-portlet--bordered-semi">
                <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="flaticon-statistics"></i>
												</span>
                            <h3 class="m-portlet__head-text">
                                Teknik Servis ile ilgili işlemler
                            </h3>
                            <h2 class="m-portlet__head-label m-portlet__head-label--success">
													<span>
														E-İmza
													</span>
                            </h2>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">

                    </div>
                </div>
                <div class="m-portlet__body">

                    <deneme></deneme>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import deneme from './Article'
    export default {

        components:{

            deneme,
        },



    }
</script>

<style >
    .con-colors ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .con-colors li{
        display: block;
        position: relative;
        width: 100px;
        height: 100px;
        background: rgb(155, 250, 149);
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(255, 255, 255);
        border-radius: 10px;
        cursor: default;
    }
    .primary {
        background: rgb(var(--primary)) !important;
        box-shadow: 0px 15px 40px -10px rgba(var(--primary),.9);
    }
    .success {
        background: rgb(var(--success)) !important;
        box-shadow: 0px 15px 40px -10px rgba(var(--success),.9);
    }
    .danger {
        background: rgb(var(--danger)) !important;
        box-shadow: 0px 15px 40px -10px rgba(var(--danger),.9);
    }
    .warning {
        background: rgb(var(--warning)) !important;
        box-shadow: 0px 15px 40px -10px rgba(var(--warning),.9);
    }
    .dark {
        background: rgb(var(--dark)) !important;
        box-shadow: 0px 15px 40px -10px rgba(var(--dark),.9);
    }
</style>