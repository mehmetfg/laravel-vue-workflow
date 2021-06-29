<template>
    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" :class="{'alert-accent alert':transaction.id}">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            İşlem {{transaction.id ? 'Güncelle' :'Ekle'}}
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link active" data-toggle="tab" href="#information" role="tab">
                                <i class="fa fa-user"></i>
                                ...
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="m-portlet__body">
                <form v-on:submit.prevent="onSubmit">
                <div class="tab-content">

                <input type="hidden" v-model="transaction.user_id=$store.getters.user.id">
                    <div class="tab-pane active" id="information" role="tabpanel">

                        <input type="hidden" v-model="transaction.article_id=$route.params.articleId">
                            <div class="form-group m-form__group row">
                                <div class="col-lg-4">
                                    <label>
                                        Tarih:
                                    </label>
                                    <datepicker :language="tr"  input-class="form-control"     :bootstrapStyling="true"
                                                placeholder="Tarih Seç"	v-model="transaction.date"></datepicker>


                                </div>

                            </div>
                        <div class="form-group m-form__group row">
                        <div class="col-lg-4">
                            <label class="">
                                Tanım:
                            </label>
                            <input type="text"  class="form-control m-input--air m-input" placeholder="Tanım." v-model="transaction.definition">

                        </div>
                        </div>
                            <div class="form-group m-form__group row">
                        <div class="col-lg-4">
                            <label class="">
                                Açıklama
                            </label>
                            <textarea label="Açıklama Yazınız." class="form-control m-input--air" v-model="transaction.description"> </textarea>


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
            Datepicker

        },
        data: function () {


            return {

                transaction: {},
                tr,


            }
        },
        methods: {

            onSubmit() {

                if (!this.transaction.id) {
                    this.$store.dispatch("addTransaction", this.transaction).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateTransaction", this.transaction).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.transaction = {
                ...this.$route.params.transaction

            }






        },


        computed:{

            cities(){

                return this.$store.getters.cities
            }
        }


    }
</script>

