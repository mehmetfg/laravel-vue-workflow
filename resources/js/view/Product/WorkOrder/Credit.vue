<template><div>




    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" :class="{'alert-accent alert':workorder.id}">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title" >
                        <h3 class="m-portlet__head-text">
                            <i class="fa fa-wrench  fa-2x" style="font-size: 30px;margin-right: 5px"></i>   Arıza {{workorder.id ? 'Güncelle' :'Ekle'}}
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link active" data-toggle="tab" href="#information" role="tab">
                                <i class="fa fa-clipboard"></i>
                                Teknik Destek Bilgileri
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="m-portlet__body">
                <form v-on:submit.prevent="onSubmit">
                <div class="tab-content">

                            <div class="form-group m-form__group row">

                                <div class="col-lg-3">
                                    <label class="">
                                        Kullanıcı Adı
                                    </label>
                                    <input type="text"  class="form-control m-input--air m-input" placeholder="Kullanıcı Adı" v-model="workorder.deliverer">

                                </div>
                                <div class="col-lg-3">
                                <label class="">
                                    Cihazın Durumu
                                </label>
                               <select v-model="workorder.status"   class="form-control m-input--air m-input" >
                                   <option v-for="(item, key) in wStatus" :value="key">{{item}}</option>

                               </select>
                            </div>
                                <div class="col-lg-3">
                                    <label class="">
                                        Geldiği Birim
                                    </label>
                                    <select v-model="workorder.institution_id"   class="form-control m-input--air m-input" >
                                        <option v-for="(item, key) in institutions" :value="item.id">{{item.name}}</option>

                                    </select>
                                </div>
                                <div class="3">
                                    <label class="">
                                        Cihaz  Geri Teslim Tarihi
                                    </label>
                                    <datepicker :language="tr"  input-class="form-control"  placeholder="Tarih Seç"  :bootstrapStyling="true" v-model="workorder.return_date"></datepicker>

                                </div>
                            </div>
                    <div class="form-group m-form__group row">
                    <div class="col-lg-12">
                        <label>
                            Açıklama
                        </label>
                        <textarea type="text"  class="form-control m-input--air m-input" placeholder="Açıklama" v-model="workorder.description"></textarea>



                    </div>
                    </div>

                    <div class="m-accordion__item m-accordion__item--focus">
                        <div class="m-accordion__item-head collapsed  btn-danger btn btn-block " role="tab" id="m_accordion_6_item_1_head" data-toggle="collapse" href="#m_accordion_6_item_1_body" aria-expanded="    false">
													<span class="m-accordion__item-icon">
														<i class="la la-wrench"></i>
													</span>
                            <span class="m-accordion__item-title">
														Servis Bilgileri
													</span>
                            <span class="m-accordion__item-mode"><i class="fa fa-plus"></i></span>
                        </div>
                        <hr>
                        <div class="m-accordion__item-body collapse" id="m_accordion_6_item_1_body" role="tabpanel" aria-labelledby="m_accordion_6_item_1_head" data-parent="#m_accordion_6">
                            <div class="m-accordion__item-content">
                                <div class="form-group m-form__group row">

                                    <div class="col-lg-4">
                                        <label class="">
                                            Firma Adı
                                        </label>
                                        <input type="text"  class="form-control m-input--air m-input" placeholder="Firma Adı" v-model="workorder.company">

                                    </div>
                                    <div class="col-lg-4">
                                        <label class="">
                                            Firma Personeli Adı
                                        </label>
                                        <input   class="form-control m-input--air m-input" placeholder="Firma Personeli Adı" v-model="workorder.authorized">
                                    </div>

                                </div>
                                <div class="form-group m-form__group row">


                                    <div class="col-lg-4">
                                        <label>
                                            Servise Verilen Tarih
                                        </label>
                                        <datepicker :language="tr"  input-class="form-control"  placeholder="Tarih Seç"  :bootstrapStyling="true" v-model="workorder.service_date"></datepicker>

                                    </div>

                                    <div class="col-lg-4">
                                        <label>
                                            Servisten Geri Dönüş Tarihi
                                        </label>
                                        <datepicker :language="tr"  input-class="form-control"  placeholder="Tarih Seç"  :bootstrapStyling="true" v-model="workorder.service_return_date"></datepicker>



                                    </div>

                                    <div class="col-lg-4">
                                        <label>
                                            Onarım Maliyeti
                                        </label>
                                        <input type="text"  class="form-control m-input--air m-input" placeholder="Onarım Maliyeti" v-model="workorder.repair_cost">

                                    </div>
                                </div>

                                <div class="form-group m-form__group row">

                                    <div class="col-lg-8">
                                        <label>
                                            Servis Raporu
                                        </label>
                                        <textarea type="text"  class="form-control m-input--air m-input" placeholder="Açıklama" v-model="workorder.service_report"></textarea>



                                    </div>



                                </div>
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

                workorder: {},
                tr,

            }
        },
        methods: {

            onSubmit() {

                if (!this.workorder.id) {
                    this.$store.dispatch("addWorkorder", this.workorder).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateWorkorder", this.workorder).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.workorder = {
                ...this.$route.params.workorder

            }


            this.workorder.product_id=this.$route.params.productId

            this.$store.dispatch("initInstitutions", 2)

        },


        computed:{

            wStatus(){

                return this.$store.getters.workorderStatus
            },
            institutions(){
                return this.$store.getters.institutions
            }

        }


    }
</script>

