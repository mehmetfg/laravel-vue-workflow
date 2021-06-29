<template>

    <div class="m-portlet m-portlet--tab">

        <div class="m-portlet__head " :class="">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        Dağıtım

                    </h3>

                </div>
            </div>
            <div class="m-portlet__head-tools">
                <router-link :to="{name:'add-deploy', params: {articleId: $route.params.articleId}}">
                    <a class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill text-white">
												<span>
																<i class="fa fa-plus "></i>
													<span>
														Yeni Dağıtım Ekle
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
                                    Gelmedi - Geldi
                                </th>

                                <th style="width: 250px">
                                 Kurum
                                </th>
                                <th>
                                    Tanım
                                </th>
                                <th>
                                    Tarih
                                </th>

                                <th>
                                    İşlemler
                                </th>
                            </tr>
                            </thead>
                            <tbody is="transition-group" name="list" mode="out-in" type="transition">

                            <tr v-for="(item, index) in deploys" :class="" :key="item.id" >
                                <td>
                                    <span class="m-badge m-badge--danger "    >{{item.id}} </span>

                                </td>
                                <td>
                                        <span class="m-switch m-switch--outline m-switch--icon m-switch--accent" >
																		<label>
																		<input type="checkbox"
                                                                               v-bind:checked="item.status"
                                                                               v-on:change="isActiveSetter(item)"
                                                                               :id="'mycheckbox'+item.id">
																	    		<span></span>
																		</label>
																	</span>

                                </td>
                                <td>

                                    <span class="bold "    >{{getInsName(item.id)}} </span>
                                </td>
                                <td>

                                   <span class="bold "    >{{item.definition}} </span>
                                </td>
                                <td width="250px">

                                    <span class="m-badge m-badge--wide alert alert-danger "    >{{item.date | formatShift}} </span>


                                </td>


                                <td data-field="Actions"
                                    class="m-datatable__cell m-datatable__cell--center m-datatable__cell m-datatable__cell--check">


                                    <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="click" aria-expanded="true">
                                        <a href="#" class="m-portlet__nav-link m-dropdown__toggle btn btn-secondary m-btn m-btn--icon m-btn--pill">
                                            <i class="la la-ellipsis-v"></i>
                                        </a>
                                        <div class="m-dropdown__wrapper">
                                            <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 24.1015px;"></span>
                                            <div class="m-dropdown__inner">
                                                <div class="m-dropdown__body">
                                                    <div class="m-dropdown__content">
                                                        <ul class="m-nav">

                                                            <li class="m-nav__item">
                                                                <a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
                                                                    Gelmedi
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <router-link
                                            :to="{ name:'edit-deploy', params : { deploy : item}}">

                                        <a class="btn m-btn--pill m-btn--air         btn-outline-success">
                                            <i class="la la-edit"></i> Güncelle

                                        </a>
                                    </router-link>


                                    <a dataurl="41"
                                       class="btn btn-outline-accent m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air"
                                       v-on:click="deleteDeploy(item.id)">
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




    import status from "./Status"
    import { mapGetters } from 'vuex'
    export default {


        components:{

            status,

        },
        data: function () {


            return {

                statusText:'Gelmedi',


            }

        },
        methods: {


            getInsName(id){

                for(let index in this.institutions){

                    if(this.institutions[index].id===id){


                        return this.institutions[index].name
                    }
                }
            },

            isActiveSetter(deploy) {

                deploy.status = document.querySelector('#mycheckbox' + deploy.id).checked;

                if(deploy.status){
                    this.statusText="Geldi"

                }
                this.$store.dispatch("deployStatusSetter", deploy);
            },

            deleteDeploy(id) {

                this.$store.dispatch("deleteDeploy", id);

            },


        },

        created() {

                this.$store.dispatch("initDeploys", this.$route.params.articleId);



        },

        computed: {
            ...mapGetters([
                 'deploys',
                'deployStatus',
                'institutions'

            ]),



        },



    }

</script>

<style scoped>

</style>