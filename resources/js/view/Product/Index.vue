<template>

    <div class="m-portlet m-portlet--tab">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head" >
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            Kayıtlı Cihaz Demirbaş Listesi
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <router-link :to="{name:'add-product'}">
                        <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														  Demirbaş Ekle
													</span>
												</span>
                        </a></router-link>
                </div>
            </div>
            <div class="m-portlet__body">

                    <div class="form-group m-form__group row">
                        <div class="col-lg-3">

                            <input type="text"  v-model="tagSearch" class="form-control m-input--air m-input" placeholder="Künye No:" required="required">

                        </div>
                        <div class="col-lg-3">

                            <input type="text"   v-model="serialSearch" class="form-control m-input--air m-input" placeholder="Seri No:" required="required">

                        </div>
                        <div class="col-lg-3">

                            <input type="text"  v-model="brandSearch" class="form-control m-input--air m-input" placeholder="Marka & Model:" required="required">

                        </div>
                        <div class="col-lg-3">

                            <button type="submit" class="btn btn-danger btn-block">
                                <i class="fa fa-search"></i>   Ara
                            </button>

                        </div>
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

                                <th style="width: 250px">
                                 Künye
                                </th>
                                <th>
                                    Cihaz Tanımı
                                </th>
                                <th>
                                    Seri Numarası
                                </th>
                                <th>
                                    Marka-Model
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

                                    <span class="bold "    >{{item.tag}} </span>
                                </td>
                                <td>

                                   <span class="bold "    >{{item.name}} </span>
                                </td>
                                <td width="250px">

                                    <span class="bold "    >{{item.serial}} </span>


                                </td>
                                <td>            <span class="bold "    >{{item.brand+'/'+item.model}} </span></td>
                                <td>          </td>
                                <td>          </td>
                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">






                                    <router-link
                                            :to="{ name:'add-workorder', params : { productId : item.id}}">

                                        <a class="btn m-btn--pill m-btn--air btn-danger text-white">
                                            <i class="fa fa-wrench"></i> Arıza Ekle

                                        </a>
                                    </router-link>
                                    <button v-on:click="onSelectDetail(item.id)"    class="btn btn-accent  m-btn--pill m-btn--air">

                                        Cihaz Hareket Görüntüle </button>
                                    <router-link
                                            :to="{ name:'edit-product', params : { product : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>

                                    <button v-on:click="onSelectedQrCode(item.qrcode)"    class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air">

                                        <i class="fa fa-qrcode"></i></button>



                                    <a dataurl="41" v-show="false"
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


<hr>
                <paginate :items="products" @changePage="onChangePage" :labels="customLabels" :maxPages="5" :pageSize="5">
                </paginate>
            </div>

        </div>



            <b-modal id="qr-modal" size="lg" class="embed-responsive embed-responsive-16by9"  title="Ürün Künyesi">

                <div slot="modal-ok">
                    Tamam
                </div>
                <div slot="modal-cancel">
                    Vazgeç
                </div>
                <div class="center">
                    <b-embed
                            type="iframe"
                            aspect="4by3"
                            :src="selectedItem"
                            allowfullscreen
                    ></b-embed>
                </div>



            </b-modal>


        <b-modal id="detail-modal" size="lg" class="embed-responsive embed-responsive-16by9"  title="Ürünün Arıza Hareket Listesi">

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
                            Sahibi
                        </th>

                        <th>
                            Açıklama
                        </th>

                        <th>
                            Servis Bedeli
                        </th>

                    </tr>
                    </thead>
                    <tbody is="transition-group" name="list"  type="transition">

                    <tr v-for="item in initWorkorderProduct" :class="" :key="item.id">
                        <td>
                            <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                        </td>

                        <td>

                            <span class="m-badge m-badge--wide alert alert-primary  "    >{{item.service_date | formatShift}} </span>
                        </td>
                        <td width="250px">

                            <span class="bold "    >{{item.deliverer}} </span>


                        </td>
                        <td>            <span class="bold "    >{{item.description}} </span></td>
                        <td>            <span class="bold "    >{{item.repair_cost? item.repair_cost:0}} </span></td>

                    </tr>

                    </tbody>
                </table>
            </div>



        </b-modal>
        </div>




</template>

<script>



    import { mapGetters } from 'vuex'
    export default {


        data: function () {


            return {
                selectedItem: {},
                selectProduct: {},
                currentx: 5,
                searchName: '',
                isFirstDate: false,
                isSecondDate: false,
                customLabels: {
                    first: '<<',
                    last: '>>',
                    previous: '<',
                    next: '>'
                },
                pageOfItems: [],

                serialSearch:'',
                brandSearch:'',
                tagSearch:'',


            }

        },
        methods: {

            onSelectedQrCode(item) {
                this.selectedItem = item
                this.$bvModal.show('qr-modal')
            },
            onSelectDetail(ProductId) {
                this.$store.dispatch("initWorkorderProduct", ProductId)
                this.$bvModal.show('detail-modal')
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

            this.$store.dispatch("initProducts", 1);


        },

        computed: {
            ...mapGetters([
                'products',
                'initWorkorderProduct'


            ]),

            products() {

                return this.$store.getters.products.filter(post => {

                    return post.tag.toLowerCase().includes(this.tagSearch.toLowerCase())
                        && post.serial.toLowerCase().includes(this.serialSearch.toLowerCase())
                        && (post.brand.toLowerCase().includes(this.brandSearch.toLowerCase())
                        || post.model.toLowerCase().includes(this.brandSearch.toLowerCase()))
                })


            }


        }
    }

</script>

<style scoped>

</style>