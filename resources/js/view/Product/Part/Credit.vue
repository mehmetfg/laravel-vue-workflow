<template><div>



    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" :class="{'alert-accent alert':product.id}">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title" >
                        <h3 class="m-portlet__head-text">
                            <i class="fa fa-gears  fa-2x" style="font-size: 30px;margin-right: 5px"></i>   Yeni Yedek Parça {{product.id ? 'Güncelle' :'Ekle'}}
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link active" data-toggle="tab" href="#information" role="tab">
                                <i class="fa fa-clipboard"></i>
                                Ürün  Bilgileri
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="m-portlet__body">
                <form v-on:submit.prevent="onSubmit">
                    <div class="tab-content">


                        <div class="form-group m-form__group row">

                            <div class="col-lg-4">
                                <label class="">
                                    Cihaz Adı
                                </label>
                                <input type="text"  class="form-control m-input--air m-input" placeholder="Cihaz Adı" v-model="product.name">

                            </div>
                            <div class="col-lg-4">
                                <label class="">
                                    Seri Numarası
                                </label>
                                <input   class="form-control m-input--air m-input" required="required" placeholder="Seri" v-model="product.serial">
                            </div>
                            <div class="col-lg-4">
                                <label class="">
                                    Marka
                                </label>
                                <input   class="form-control m-input--air m-input" placeholder="Marka" v-model="product.brand">

                            </div>
                        </div>
                        <div class="form-group m-form__group row">

                            <div class="col-lg-4">
                                <label class="">
                                    Cihaz Modeli
                                </label>
                                <input type="text"  class="form-control m-input--air m-input" placeholder="Cihaz Modeli" v-model="product.model">

                            </div>
                            <div class="col-lg-4">
                                <label class="">Adet
                                </label>
                                <input   class="form-control m-input--air m-input" placeholder="Adet" v-model="product.quentity">
                            </div>
                            <div class="col-lg-4">
                                <label class="">
                                    Açıklama
                                </label>
                                <input   class="form-control m-input--air m-input" placeholder="Açıklama" v-model="product.description">

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



    export default {

        components:{



        },



        data: function () {


            return {

                product: {},


            }
        },
        methods: {

            onSubmit() {

                if (!this.product.id) {
                    this.$store.dispatch("addProduct", this.product).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateProduct", this.product).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.product = {
                ...this.$route.params.product

            }

            this.product.type=2




        },


        computed:{

            cities(){

                return this.$store.getters.cities
            }
        }


    }
</script>

