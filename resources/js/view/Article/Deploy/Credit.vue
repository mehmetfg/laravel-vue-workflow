<template>
    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" :class="{'alert-accent alert':deploy.id}">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            Dağıtım {{deploy.id ? 'Güncelle' :'Ekle'}}
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
                    <div class="tab-pane active" id="information" role="tabpanel">
                        <input type="hidden" v-model="deploy.article_id=$route.params.articleId">
                            <div class="form-group m-form__group row">
                                <div class="col-lg-4">
                                    <label>
                                        Tanım
                                    </label>
                                    <input type="text"  class="form-control m-input--air m-input" placeholder="Tanım:" v-model="deploy.definition" required="required">

                                </div>

                            </div>


                        <div class="form-group m-form__group row">
                        <div class="col-lg-4">
                            <label class="">
                                Tarih:
                            </label>
                            <datepicker :language="tr"  input-class="form-control"     :bootstrapStyling="true"
                                        placeholder="Tarih Seç"	v-model="deploy.date"></datepicker>

                        </div>
                        </div>
                        <div class="form-group m-form__group row">
                            <div class="col-lg-4">
                                <label class="">
                                    Email:
                                </label>
                                <input type="email"  class="form-control m-input--air m-input" placeholder="Email" v-model="deploy.email">

                            </div>
                        </div>
                            <div class="form-group m-form__group row">
                        <div class="col-lg-4">
                            <label>
                                Kurum:
                            </label>
                            <select v-model="deploy.institution_id"  class="form-control m-input--air">
                                <option v-for="item in institutions" :value="item.id">{{item.name}}</option>
                            </select>

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

                deploy: {},
                tr,

            }
        },
        methods: {

            onSubmit() {

                if (!this.deploy.id) {
                    this.$store.dispatch("addDeploy", this.deploy).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateDeploy", this.deploy).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.deploy = {
                ...this.$route.params.deploy

            }








        },


        computed:{

            institutions(){

                return this.$store.getters.institutions
            }
        }


    }
</script>

