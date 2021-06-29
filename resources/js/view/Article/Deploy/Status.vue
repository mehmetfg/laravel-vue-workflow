<template>
<div >

    <form v-on:submit.prevent="onSubmit(deploy)">

        <p>
            <select class="form-control" v-model="deploy.status"  :id="'myselect'+deploy.id">>
                <option :value="1">Beklemede</option>
                <option :value="1">Arandı</option>
                <option :value="1">Geldi</option>
            </select>
        </p>    <button type="button" name="button" class="vs-component vs-button vs-button-primary vs-button-filled">
        Kaydet {{deploy.status}}
    </button>
    </form>
</div>

</template>

<script>
    export default {

        props:['deploy'],
             methods:{

          onSubmit(deploy){


              var e = document.getElementById('myselect' + deploy.id);
              deploy.status = e.options[e.selectedIndex].value;


              this.$store.dispatch("deployStatusSetter", deploy);

          },

      },
        mounted(){


        }
    }
</script>

<style scoped>

</style>