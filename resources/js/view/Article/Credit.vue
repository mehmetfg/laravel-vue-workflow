<template>
    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" :class="{'alert-accent alert':article.id}">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title" >
                        <h3 class="m-portlet__head-text">
                            <i class="fa fa-files-o  fa-2x" style="font-size: 30px;margin-right: 5px"></i>   Yazı {{article.id ? 'Güncelle' :'Ekle'}}
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link active" data-toggle="tab" href="#information" role="tab">
                                <i class="fa fa-clipboard"></i>
                                Yazışma Bilgileri
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="m-portlet__body">
                <form v-on:submit.prevent="onSubmit">
                <div class="tab-content">
                    <div class="tab-pane active" id="information" role="tabpanel">

                            <div class="form-group m-form__group row">
                                <div class="col-lg-4">
                                    <label>
                                        Yazı Adı
                                    </label>
                                    <input type="text"  class="form-control m-input--air m-input" placeholder="Yazı Adı:" v-model="article.name" required="required">

                                </div>
                                <div class="col-lg-4">
                                    <label class="">
                                        Tarih
                                    </label>

                                    <datepicker :language="tr"  input-class="form-control"  placeholder="Tarih Seç"  :bootstrapStyling="true" v-model="article.date"></datepicker>

                                </div>
                                <div class="col-lg-4">
                                    <label class="">
                                        Barkod
                                    </label>
                                    <input type="text"  class="form-control m-input--air m-input" placeholder="Barkod" v-model="article.barcode">

                                </div>
                            </div>
                            <div class="form-group m-form__group row">
                                <div class="col-lg-4">
                                    <label class="">
                                       Yazan
                                    </label>
                                    <input   class="form-control m-input--air m-input" placeholder="Yazan"v-model="article.writer">

                                </div>

                                <div class="col-lg-4">
                                    <label class="">
                                        Açıklama
                                    </label>
                                    <input   class="form-control m-input--air m-input" placeholder="Açıklama" v-model="article.description">
                                </div>      <div class="col-lg-4">
                                <label>
                                    Gönderen Kurum
                                </label>
                                <input type="text"  class="form-control m-input--air m-input" placeholder="Gönderen Kurum" v-model="article.sender">

                            </div>
                            </div>
                            <div class="form-group m-form__group row">


                                <div class="col-lg-4">
                                    <label>
                                       Geri Dönüş Tarihi
                                    </label>
                                    <datepicker :language="tr"  input-class="form-control"  placeholder="Tarih Seç"  :bootstrapStyling="true" v-model="article.deploy_date"></datepicker>



                                </div>
                                <div class="col-lg-4">
                                    <label>
                                        Gelen Kuruma Dönüş Tarihi
                                    </label>
<datepicker :language="tr"  input-class="form-control"     :bootstrapStyling="true"
            placeholder="Tarih Seç"	v-model="article.sender_date"></datepicker>




                                </div>
                                <div class="col-lg-4" v-show="false">
                                    <label>
                                 Belge & Resim
                                    </label>
                                    <input type="text"  class="form-control m-input--air m-input" placeholder="Belge & Resim" v-model="article.document">

                                </div>
                            </div>

                    </div>





                </div>
                <hr>
                <div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit text-center ">
                    <div class="m-form__actions m-form__actions--solid">
                        <div class="row">


                            <button type="submit" class="btn btn-primary">
                                Kaydet
                            </button>
                            <a v-on:click="$router.go(-1)" class="btn btn-secondary">
                                Vazgeç
                            </a>

                        </div>
                    </div>
                </div>
                </form>
            </div>

        <!--end::Portlet-->
    </div>

    </div>

</template>

<script>


    import {tr} from 'vuejs-datepicker/dist/locale'
    import Datepicker from 'vuejs-datepicker';
    export default {

        components:{

            Datepicker,

        },



        data: function () {


            return {

                article: {},
                tr,

            }
        },
        methods: {

            onSubmit() {

                if (!this.article.id) {
                    this.$store.dispatch("addArticle", this.article).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateArticle", this.article).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.article = {
                ...this.$route.params.article

            }






        },


        computed:{

            cities(){

                return this.$store.getters.cities
            }
        }


    }
</script>

