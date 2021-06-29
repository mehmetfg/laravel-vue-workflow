<template>
    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            <i class="fa fa-file fa-2x" style="font-size: 30px;margin-right: 5px"></i>     {{article.name}}
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link " data-toggle="tab" href="#information" role="tab">
                                <i class="fa fa-user"></i>
                                Bilgiler
                            </a>
                        </li>
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link active  " data-toggle="tab" href="#transaction" role="tab">
                                <i class="flaticon-list-2"></i>
                                İşlemler
                            </a>
                        </li>
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link " data-toggle="tab" href="#deploy" role="tab">
                                <i class="flaticon-time-3"></i>
                                Dağıtım
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

                <div class="tab-content">
                    <div class="tab-pane " id="information" role="tabpanel">
                        <div class="m-portlet m-portlet--tab">
                        <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                                <div class="m-portlet__head-title">
                                    <h3 class="m-portlet__head-text">
                                        <i class="fa fa-clipboard"></i>
                                        Yazışma Bilgileri
                                    </h3>
                                </div>
                            </div>
                            <div class="m-portlet__head-tools">

                                <router-link :to="{name:'add-article'}">
                                    <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														Yeni Yazı Ekle
													</span>
												</span>
                                    </a></router-link>
                            </div>
                        </div>
                 <div class="m-portlet__body">
                            <div class="form-group m-form__group row">
                                <div class="col-lg-3">
                                    <label >
                                        Yazı Adı
                                    </label>


                                </div>
                                <div class="col-lg-3">
                                    <label class="">
                                        <b>{{article.name}}</b>
                                    </label>


                                </div>
                                <div class="col-lg-3">
                                    <label class="">
                                        Tarih:
                                    </label>


                                </div>
                                <div class="col-lg-3">
                                    <label class="">
                                        <b>{{article.date | formatShift}}</b>
                                    </label>


                                </div>
                            </div>

                     <div class="form-group m-form__group row">
                     <div class="col-lg-3">
                         <label>
                             Barkod:
                         </label>


                     </div>
                     <div class="col-lg-3">
                         <label class="">
                             <b>{{article.barcode}}</b>
                         </label>


                     </div>
                     <div class="col-lg-3">
                         <label class="">
                             Yazan:
                         </label>


                     </div>
                     <div class="col-lg-3">
                         <label class="">
                             <b>{{article.writer}}</b>
                         </label>


                     </div>
                 </div>

                     <div class="form-group m-form__group row">
                         <div class="col-lg-3">
                             <label>
                                 Açıklama:

                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 <b>{{article.description}}</b>
                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 Gönderen Kurum:
                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 <b>{{article.sender}}</b>
                             </label>


                         </div>
                     </div>
                     <div class=" m-input-group--air row">
                         <div class="col-lg-3">
                             <label>
                                 Geri Dönüş Tarihi:
                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 <b>{{article.deploy_date | formatShift}}</b>
                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 Gelen Kurum Geri Dönüş Tarihi:
                             </label>


                         </div>
                         <div class="col-lg-3">
                             <label class="">
                                 <b>{{article.sender_date | formatShift}}</b>
                             </label>


                         </div>
                     </div>


                 </div>
                        </div>
                    </div>


                    <div class="tab-pane" id="deploy" role="tabpanel">
                  <deploy></deploy>
                    </div>
                    <div class="tab-pane active" id="transaction" role="tabpanel">
                    <transaction></transaction>
                    </div>


                </div>
                <hr>



        <!--end::Portlet-->
    </div>

    </div>

</template>

<script>

import  deploy from "./Deploy/Index"
import transaction from "./Transaction/Index"

    export default {

        components:{

            deploy,
            transaction,
           
        },
        data: function () {


            return {



            }
        },
        methods: {




        },


        created() {


            this.$store.dispatch("initArticle",this.$route.params.articleId)
            this.$store.dispatch("initInstitutions")




        },



     computed:{

            article(){

                return {
                    ...this.$store.getters.article
                }

            },

     }


    }
</script>

