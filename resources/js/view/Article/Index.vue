<template>

    <div class="m-portlet m-portlet--tab">

        <div class="m-portlet__head " :class="">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        <i class="fa fa-files-o  fa-2x" style="font-size: 30px;margin-right: 5px"></i>  Yazılar

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
                                 Adı
                                </th>

                                <th>
                                    Barkod
                                </th>
                                <th>
                                    Gönderen
                                </th>
                                <th>
                                    Gönderilen Son Tarih
                                </th>
                                <th>
                                    Gönderen Son Tarih
                                </th>
                                <th>
                                    İşlemler
                                </th>
                            </tr>
                            </thead>
                            <tbody is="transition-group" name="list" mode="out-in" type="transition">

                            <tr v-for="(item, index) in articles"
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

                                    <span class="bold "    >{{item.barcode}} </span>


                                </td>
                                <td>            <span class="bold "    >{{item.sender}} </span></td>
                                <td>            <span :class="{'m-badge m-badge--wide alert alert-danger ':(new Date()>new Date(item.deploy_date))}"   >{{item.deploy_date | formatShift}} </span></td>
                                <td>            <span :class="{'m-badge m-badge--wide alert alert-danger ':(new Date()>new Date(item.sender_date))}"     >{{item.sender_date| formatShift}} </span></td>
                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">




                                    <router-link
                                            :to="{ name:'article-common', params : { articleId : item.id}}">

                                        <a class="btn m-btn--pill m-btn--air  text-white          btn-accent">
                                            <i class="fa			fa-list-ul"></i>      İşlemler

                                        </a>
                                    </router-link>


                                    <router-link
                                            :to="{ name:'edit-article', params : { article : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>


                                    <a dataurl="41"
                                       class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                       v-on:click="deleteArticle(item.id)">
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


            deleteArticle(id) {

                this.$store.dispatch("deleteArticle", id);

            },
            deployStatusSetter(deploy) {

                deploy.isActive = document.querySelector('#mycheckbox' + deploy.id).checked;

                this.$store.dispatch("deployStatusSetter", deploy);
            }


        },

        created() {

                this.$store.dispatch("initArticles");




        },

        computed: {
            ...mapGetters([
                 'articles'

            ]),



        },



    }

</script>

<style scoped>

</style>