<template>

    <div class="m-portlet m-portlet--tab">

        <div class="m-portlet__head " :class="">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        İşlemler

                    </h3>

                </div>
            </div>
            <div class="m-portlet__head-tools">
                <router-link :to="{name:'add-transaction',params: {articleId: $route.params.articleId}}">
                    <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														Yeni İşlem Ekle
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
                                <th>
                                    Tarih
                                </th>
                                <th style="width: 250px">
                                 Tanım
                                </th>

                                <th>
                                    Açıklama
                                </th>

                                <th>
                                    Kullanıcı
                                </th>
                                <th>
                                    İşlemler
                                </th>
                            </tr>
                            </thead>
                            <tbody is="transition-group" name="list"  type="transition">

                            <tr v-for="item in transactions" :class="" :key="item.id">
                                <td>
                                    <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                </td>

                                <td>

                                   <span class="m-badge m-badge--wide alert alert-primary  "    >{{item.created_at | formatShift}} </span>
                                </td>
                                <td width="250px">

                                    <span class="bold "    >{{item.definition}} </span>


                                </td>
                                <td>            <span class="bold "    >{{item.description}} </span></td>
                                <td>            <span class="bold "    >{{getName(item.user_id)}} </span></td>
                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">







                                    <router-link
                                            :to="{ name:'edit-transaction', params : { transaction : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>


                                    <a dataurl="41"
                                       class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                       v-on:click="deleteTransaction(item.id)">
                                        <i class="la la-trash"></i>
                                    </a>


                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <!--end: Datatable -->
            </div>

        </div>
        </div>


</template>

<script>


    import { mapGetters } from 'vuex'
    export default {


        data(){

          return {
              usera:[]
          }

        },
        filters:{



        },
        components:{


        },


        methods: {

            getName: function(value){

                for (var index in this.$store.getters.users) {
                    if(this.$store.getters.users[index].id==value){
                        return this.$store.getters.users[index].name
                    }

                }


            },
            deleteTransaction(id) {

                this.$store.dispatch("deleteTransaction", id);

            },


        },

        created() {

                this.$store.dispatch("initTransactions", this.$route.params.articleId);
            this.$store.dispatch("initUsers");
            this.usera={

                ...this.$store.getters.users
            }
        },

        computed: {
            ...mapGetters([
                 'transactions',
                'users'

            ]),



        },



    }

</script>

<style scoped>

</style>