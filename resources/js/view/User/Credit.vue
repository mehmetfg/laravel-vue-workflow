<template>
    <div class="m-content">
        <div class="col-md-12">

            <div class="m-portlet m-portlet--tab">
                <div class="m-portlet__head " :class="{'alert-accent alert':this.user.id}">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
                            <h3 class="m-portlet__head-text ">
                                Kullannıcı {{user.id ? 'Güncelle' :'Ekle'}}

                            </h3>
                        </div>
                    </div>
                    <div class="m-portlet__head-tools">

                    </div>
                </div>
                <!--begin::Form-->


                <form v-on:submit.prevent="onSubmit"
                      class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed myform"
                      method="post"
                      enctype="multipart/form-data">


                    <div class="m-portlet__body">
                        <div class="form-group m-form__group">

                            <label>Kullanıcı Tipi</label>
                            <select v-model="user.type" class="form-control">
                                <option value="">Seçiniz</option>
                                <option v-for="item in userType" :value="item.id">{{item.name}}</option>
                            </select>


                            <label>Adı</label>
                            <input class="form-control  m-input--air" required="required"
                                   :class="{'m-input--solid':user.id}"
                                   v-model="user.name"
                                   placeholder="  Girilmesi Zorunlu" type="text"/>








                            <label>Email</label>
                            <input class="form-control  m-input--air" required="required"
                                   :class="{'m-input--solid':user.id}"
                                   v-model="user.email"
                                   placeholder="  Girilmesi Zorunlu" type="text"/>

                            <label>Şifre</label>
                            <input class="form-control  m-input--air" required="required"
                                   :class="{'m-input--solid':user.id}"
                                   v-model="user.password"
                                   placeholder="  Girilmesi Zorunlu" type="text"/>

                            <label>Telefon</label>
                            <input class="form-control  m-input--air"
                                   :class="{'m-input--solid':user.id}"
                                   v-model="user.phone"
                                   type="text"/>


                            <label>Adres</label>
                            <input class="form-control  m-input--air multiple"
                                   :class="{'m-input--solid':user.id}"
                                   v-model="user.address"
                                   type="text"/>









                        </div>
                    </div>
                    <div class="m-portlet__foot m-portlet__foot--fit">
                        <div class="m-form__actions">

                            <button type="submit" class="btn btn-primary">
                                Kaydet
                            </button>
                            <a v-on:click="$router.go(-1)" class="btn btn-secondary">
                                Vazgeç
                            </a>

                        </div>
                    </div>
                </form>
                <!--end::Form-->
            </div>


        </div>


    </div>


</template>

<script>


    export default {


        data: function () {


            return {

                user: {},
                userType:[]

            }
        },
        methods: {

            onSubmit() {

                if (!this.user.id) {
                    this.$store.dispatch("addUser", this.user).then(() => {

                        this.$router.go(-1)


                    })


                } else {
                    this.$store.dispatch("updateUser", this.user).then(() => {

                        this.$router.go(-1)
                    });

                }


            },


        },


        created() {
            this.user = {
                ...this.$route.params.user

            }
            this.userType={

                ...this.$store.getters.userType
            }





        },



        watch:{



        }


    }
</script>

