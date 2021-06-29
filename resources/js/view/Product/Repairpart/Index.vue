<template>
<div>

    <div class="row">

        <div class="col-md-4">
            <div class="card border-primary mb-3">
                    <div class="m-portlet__head alert-danger alert ">Chaz Bilgilieri</div>
                <div class="card-body ">
                    <div class="row">
                        <div class="col-md-6"> <b class="card-title" style="display: inline-block">Künye:  </b><span class=" ml-5"> {{product.tag}}</span></div>
                        <div class="col-md-6">  <b class="card-title" style="display: inline-block">Adı:  </b><span class=" ml-5 "> {{product.brand+' '+product.model}}</span></div>

                        <div class="col-md-6"> <b class="card-title" style="display: inline-block">Seri No:  </b><span class=" ml-5"> {{product.serial}}</span></div>
                        <div class="col-md-6">  <b class="card-title" style="display: inline-block">Durumu:  </b><a class=" ml-5" :href="product.qrcode"> <i class="fa-qrcode fa fa-2x" ></i></a></div>
                    </div>
<hr>
                    <table class="table" v-show="repair.length>0">
                        <thead>
                        <tr>
                           Kayıtlı Parçalar


                        </tr>
                        </thead>
                        <tbody is="transition-group" name="page"  type="transition">

                        <tr v-for="(item,index) in repair" :class="" :key="index">
                            <td>
                                <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                            </td>

                            <td>

                                <span class="m-badge m-badge--wide alert alert-primary  "   >{{item.name}}{{item.product_id}}  </span>
                            </td>

                            <td>     <b>  {{item.quentity?item.quentity:1}} Adet</b></td>
                            <td>
                                <a
                                        class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                        v-on:click="deleteRepairpart(item)">
                                    <i class="la la-trash"></i>
                                </a></td>
                        </tr>

                        </tbody>
                    </table>


                </div>
            </div>
            <div class="m-portlet"  v-show="cards.length>0">
                <div class="m-portlet__body">
                    <div class="m-card-profile">
                        <div class="m-card-profile__title m--hide">
                            Ürün Adı
                        </div>

                        <div class="center">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>

                                    <th style="width: 250px">

                                    </th>

                                    <th>
                                        Adet
                                    </th>



                                </tr>
                                </thead>
                                <tbody is="transition-group" name="page"  type="transition">

                                <tr v-for="(item,index) in cards" :class="" :key="index">
                                    <td>
                                        <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                    </td>

                                    <td>

                                        <span class="m-badge m-badge--wide alert alert-primary  "   >{{item.name}} </span>
                                    </td>

                                    <td>     <b>  {{item.count?item.count:1}} Adet</b></td>

                                </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit text-center ">
                        <div class="m-form__actions m-form__actions--solid" v-show="cards.length>0">




                                <button @click="savePart()" class="btn btn-primary btn-sm" >
                                    Kaydet
                                </button>

                                <a v-on:click="resetPart()" class="btn btn-secondary btn-sm">
                                    Sil
                                </a>




                        </div>
                    </div>
                </div>
            </div>


    </div>
        <div class="col-md-8">
            <div class="m-portlet ">
                <div class="m-portlet__head alert-accent alert" >
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title" >
                            <h6 class="m-portlet__head-text">
                                <div class="m-portlet__head" >
                                    <div class="m-portlet__head-caption">
                                        <div class="m-portlet__head-title" >
                                            <span class="m-portlet__head-text">
                                                Yedek Parça Listesi
                                            </span>
                                        </div>
                                    </div>
                                    <div class="m-portlet__head-tools">

                                    </div>
                                </div>
                            </h6>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">

                    </div>
                </div>
                <div class="m-portlet__body">

                    <div class="row">


                            <div v-for="item in parts" class="col-md-3">
                                <div class="bd-example ">
                                    <div class="card-deck">
                                        <div class="card ">
                                            <img src="/assets/image/repair.png" class="card-img-top mt-2" width="30px" height="90px ">
                                            <div class="card-body">
                                                <small>{{item.name}}</small>
                                                <p><b>{{item.quentity?item.quentity+' Adet':'Ürün Bitmiştir!'}} </b></p>
                                                <button  class="btn btn-primary btn-block " @click="addCard(item)" :disabled="item.quentity<=0"><i class="fa fa-plus"></i> Kullan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </div>
    </div>


</div>

</template>

<script>

    import {mapGetters} from 'vuex'
    import product from "../../../store/modules/product";

    export default {

        data(){

            return{
                cards:[],

                count:1,
                deger:{}
            }
        },
        methods:{


            deleteRepairpart(item){




                this.$store.dispatch("getProduct", item.product_id)

                swal({

                    title: "SİLME İŞLEMİ",
                    text: "<b>Silmek İstediğinizden Eminmisiniz!?</b>",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: "Kabul Ediyorum",
                }).then((result) => {
                        if (result.value) {

                            this.getProduct.quentity=parseInt(this.getProduct.quentity)+parseInt(item.quentity);
                            console.log(item.quentity)

                            this.$store.dispatch("deleteRepairpart", item.id)

                            this.$store.dispatch("initRepair", this.$route.params.workorderId)
                            this.$store.dispatch("updateProduct", this.getProduct)
                            this.$store.dispatch("initParts", 2)

                        }
            })

            },
            addCard(item){

                item.quentity-=1


                let index=this.cards.findIndex(c=> c.id===item.id)
                if(index>-1){

                    this.cards[index].count+=1
                }else{
                    item.count=1
                    this.cards.push(item)
                }



            },
            resetPart: function () {

                this.cards=[];
                this.$store.dispatch("initParts", 2)
            },
            savePart(){

                for(var i=0; this.cards.length>i; i++){



                    this.$store.dispatch("addRepairpart", {name:this.cards[i].name, product_id:this.cards[i].id,quentity:this.cards[i].count, work_order_id:this.$route.params.workorderId })

                    this.$store.dispatch("updateProduct", this.cards[i])
                    this.$store.dispatch("initRepair",this.$route.params.workorderId)

                }
                this.cards=[]
            }


        },
        created(){
                this.$store.dispatch('initParts', 2)
                this.$store.dispatch('initWorkorder', this.$route.params.workorderId);
                this.$store.dispatch("initRepair", this.$route.params.workorderId)
                this.$store.dispatch("initProduct", this.$route.query.productId)

        },
        computed:{
            ...mapGetters([
                    "parts",
                "workorder",
                "repair",
                "product",
                "getProduct"
                 ]),



        }

    }
</script>

<style scoped>

</style>