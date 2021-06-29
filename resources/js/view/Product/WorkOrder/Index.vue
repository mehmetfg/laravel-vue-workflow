<template>

    <div class="m-portlet m-portlet--tab">

        <div class="m-portlet__head " :class="">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                       Teknik Destek Cihaz Durumu Listesi

                    </h3>

                </div>
            </div>
            <div class="m-portlet__head-tools">

                    <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white"  data-toggle="tab" href="#product" role="tab">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														Yeni Arıza için Cihaz Seç
                                                    </span>
												</span>
                    </a>
            </div>
        </div>
        <div class="m-portlet m-portlet--mobile">

            <div class="m-portlet__body">
                <!--begin: Search Form -->

                <!--end: Search Form -->
                <!--begin: Datatable -->
                <!--begin: Datatable -->
                <div class="m-section">

                    <div class="m-section__content">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>

                                <th style="width: 250px">
                                 Cihaz
                                </th>
                                <th>
                                    Sahibi
                                </th>
                                <th>
                                    Gelme Tarihi
                                </th>
                                <th>
                                    Durum
                                </th>
                                <th>

                                </th>
                                <th>

                                </th>
                                <th>
                                    İşlemler
                                </th>
                            </tr>
                            </thead>
                            <tbody is="transition-group" name="list" mode="out-in" type="transition">

                            <tr v-for="(item, index) in workorders"
                                :class="{'m-alert  alert  m-alert--default':(new Date()>new Date(item.deploy_date)), 'm-alert alert alert-d':(new Date()>new Date(item.sender_date))}"
                                :style="{transitionDelay: (index * 0.1) + 's'}"
                                :key="item.id">
                                <td>
                                    <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                </td>
                                <td>

                                    <span class="bold "    >{{getProductName(item.product_id)}} </span>
                                </td>
                                <td>

                                   <span class="bold "    >{{item.deliverer}} </span>
                                </td>
                                <td width="250px">

                                    <span class="bold "    >{{item.created_at |formatShift}} </span>


                                </td>
                                <td>             <span  :class="{'m-badge m-badge--wide alert alert-danger ':  item.status===2,
                                 'm-badge m-badge--wide alert alert-warning ':  item.status===1,
                                 'm-badge m-badge--wide alert alert-primary ':  item.status===4,
                                 'm-badge m-badge--wide alert alert-success ':  item.status===3,}" >{{workorderStatus[item.status]}} </span></td>
                                <td>          </td>
                                <td>          </td>
                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">




                                    <router-link
                                            :to="{ name:'store', params : { workorderId : item.id}, query:{productId: item.product_id}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-danger text-white">
                                            <i class="fa 			fa-cubes"></i> Yedek Parçalar

                                        </a>
                                    </router-link>

                                    <router-link
                                            :to="{ name:'edit-workorder', params : { workorder : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>


                                    <a dataurl="41"
                                       class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                       v-on:click="deleteWorkorder(item.id)">
                                        <i class="la la-trash"></i>
                                    </a>


                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <div>

                        </div>
                    </div>

                </div>



            </div>

        </div>
        </div>


</template>

<script>


    import { mapGetters } from 'vuex'
    export default {

        components:{


        },

        data: function () {


            return {
            currentx:5,
            searchName:'',
                isFirstDate:false,
                isSecondDate:false

            }

        },
        methods: {


            deleteWorkorder(id) {


                this.$store.dispatch("deleteWorkorder", id);
            },
            deployStatusSetter(deploy) {

                deploy.isActive = document.querySelector('#mycheckbox' + deploy.id).checked;

                this.$store.dispatch("deployStatusSetter", deploy);
            },
            getProductName(id){

                let index=this.products.findIndex(c=> c.id==id);
               if(this.products[index]){

                   return this.products[index].name
               }
               return '.....'

            }

        },

        created() {

                this.$store.dispatch("initWorkorders");




        },

        computed: {
            ...mapGetters([
                 'workorders',
                'products',
                'workorderStatus'

            ]),



        },



    }

</script>

<style scoped>

</style>