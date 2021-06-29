<template>
    <div class="m-content">
        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            <i class="fa fa-user-md" style="font-size: 30px;margin-right: 5px"></i>     Teknik Destek
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">

                    <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link  active  " data-toggle="tab" href="#workorder" role="tab">
                                <i class="flaticon-settings-1"></i>
                                Teknik Destek
                            </a>
                        </li>
                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link  " data-toggle="tab" href="#product" role="tab">
                                <i class="flaticon-computer"></i>
                                Cihazlar
                            </a>
                        </li>




                        <li class="nav-item m-tabs__item">
                            <a class="nav-link m-tabs__link " data-toggle="tab" href="#repairpart" role="tab">
                                <i class="flaticon-shapes"></i>
                                Yedek Parçalar
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

                <div class="tab-content">
                    <div class="tab-pane active " id="workorder" role="tabpanel">

                        <workorder></workorder>

                    </div>
                    <div class="tab-pane " id="product" role="tabpanel">
                        <product></product>
                    </div>





                    <div class="tab-pane" id="repairpart" role="tabpanel">
                  <repairpart></repairpart>
                    </div>



                </div>
                <hr>



        <!--end::Portlet-->
    </div>

    </div>

</template>

<script>

import  workorder from "./WorkOrder/Index"
import product from "./Index"
import repairpart from "./Part/Index"
    export default {

        components:{
            repairpart,
            workorder,
            product,
           
        },
        data: function () {


            return {



            }
        },
        methods: {




        },


        created() {







        },



     computed:{



     }


    }
</script>

