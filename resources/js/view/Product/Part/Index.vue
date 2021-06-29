<template>

    <div class="m-portlet m-portlet--tab">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" >
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            Sarf Malzemesi
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <router-link :to="{name:'add-part'}">
                        <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														  Yeni Yedek Parça Ekle
													</span>
												</span>
                        </a></router-link>
                </div>
            </div>




            <!--end::Portlet-->
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


                                <th>
                                    Cihaz Tanımı
                                </th>
                                <th>
                                    Marka-Model
                                </th>
                                <th>
                                Kalan Adet
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

                            <tr v-for="(item, index) in pageOfItems"
                                :class="{'m-alert  alert  m-alert--default':(new Date()>new Date(item.deploy_date)), 'm-alert alert alert-d':(new Date()>new Date(item.sender_date))}"
                                :style="{transitionDelay: (index * 0.1) + 's'}"
                                :key="item.id">
                                <td>
                                    <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                </td>

                                <td>

                                    <span class="bold "    >{{item.name}} </span>
                                </td>
                                <td width="250px">

                                    <span class="bold "    >{{item.brand+'/'+item.model}} </span>


                                </td>
                                <td>            <span class="m-badge m-badge--primary "    >{{item.quentity}} </span></td>
                                <td>          </td>
                                <td>          </td>
                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">







                                        <a class="btn m-btn--pill m-btn--air btn-accent text-white" @click="showModalList(item.id)">
                                            <i class="fa fa-wrench"></i> Kullanılan Yerler

                                        </a>

                                    <router-link
                                            :to="{ name:'edit-part', params : { product : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>





                                    <a dataurl="41" v-show="true"
                                       class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                       v-on:click="deleteProduct(item.id)">
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


                <b-modal id="partdetail-modal" cancel-button="false"  size="lg" class="embed-responsive embed-responsive-16by9"  title="Kullanılan Ürün Lüstesi" ok-only>

                    <div slot="modal-ok">
                        Tamam
                    </div>

                    <div class="center">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Tarih
                                </th>
                                <th style="width: 250px">
                                    Tanım
                                </th>

                                <th>
                                     Adet
                                </th>


                            </tr>
                            </thead>
                            <tbody is="transition-group" name="list"  type="transition">

                            <tr v-for="item in repairpart" :class="" :key="item.id">
                                <td>
                                    <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                </td>

                                <td>

                                    <span class="m-badge m-badge--wide alert alert-primary  "    > {{item.created_at | formatShift}}</span>
                                </td>
                                <td width="250px">

                                    <span class="bold "    >{{item.name}} </span>


                                </td>
                                <td>          <span class="m-badge m-badge--wide alert alert-primary  "    >{{item.quentity}} Adet</span></td>

                            </tr>

                            </tbody>
                        </table>
                    </div>



                </b-modal>
                <hr>
                <paginate :items="parts" @changePage="onChangePage" :labels="customLabels" :maxPages="5" :pageSize="5">
                </paginate>
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
                selectedItem:{},
                currentx:5,
                searchName:'',
                isFirstDate:false,
                isSecondDate:false,
                customLabels: {
                    first: '<<',
                    last: '>>',
                    previous: '<',
                    next: '>'
                },
                pageOfItems: []
            }

        },
        methods: {

            showModalList(partId){
                this.$store.dispatch("initRepairpartForProduct", partId)
                this.$bvModal.show('partdetail-modal')
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },

            deleteProduct(id) {

                this.$store.dispatch("deleteProduct", id);

            },
            deployStatusSetter(deploy) {

                deploy.isActive = document.querySelector('#mycheckbox' + deploy.id).checked;

                this.$store.dispatch("deployStatusSetter", deploy);
            }


        },

        created() {

            this.$store.dispatch("initParts", 2);




        },

        computed: {
            ...mapGetters([
                'parts',
                'repairpart'
            ]),



        },



    }

</script>

<style scoped>

</style>