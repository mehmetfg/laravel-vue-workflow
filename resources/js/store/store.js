import Vuex from 'vuex';
import Vue from "vue";
import deploy from "./modules/deploy";
import transaction from "./modules/transaction";
import user from "./modules/user";
import workorder from "./modules/workorder"
import article from "./modules/article";
import product from "./modules/product";
import repairpart from "./modules/repairpart";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        deploy,
        transaction,
        article,
        user,
        workorder,
        repairpart,
        product,


    }

})