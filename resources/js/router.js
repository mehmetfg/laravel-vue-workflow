import Vue from "vue"
import VueRouter from "vue-router"

import Transactions from "./view/Article/Transaction/Index"
import CreditTransaction from "./view/Article/Transaction/Credit"

import Deploys from "./view/Article/Deploy/Index"
import CreditDeploy from "./view/Article/Deploy/Credit"


import  UserProfile from "./view/User/Profile"
import Users from "./view/User/Index"
import CreditUser from "./view/User/Credit"





Vue.use(VueRouter)



export const router = new VueRouter({
    routes : [
        {
            name:'home',
            path : "/",
            component : ()=> import("./view/Home/Home"),
            meta:{
                animation: 'fade-top'
            }
        },
        {
            name:'calendar',
            path : "/calendar",

            component : () => import("./view/Article/Calendar/Calendar"),
            meta:{
                animation: 'fade-top'
            }
        },



        {
            name:'article-common',
            path : "/article/:articleId",
            component : ()=> import("./view/Article/Common"),
            meta:{
                animation: 'page-access'
            }
        },
        {
            name:'articles',
            path : "/articles",
            component : ()=>import("./view/Article/Index"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'add-article',
            path : "/article/create",
            component : ()=> import("./view/Article/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'edit-article',
            path : "/article/edit",
            component : ()=> import("./view/Article/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },


        {
            name:'products',
            path : "/products",
            component : ()=>import("./view/Product/Index"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'add-product',
            path : "/product/create",
            component : ()=> import("./view/Product/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'edit-product',
            path : "/product/edit",
            component : ()=> import("./view/Product/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'parts',
            path : "/parts",
            component : ()=>import("./view/Product/Part/Index"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'add-part',
            path : "/part/create",
            component : ()=> import("./view/Product/Part/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'edit-part',
            path : "/part/edit",
            component : ()=> import("./view/Product/Part/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },

        {
            name:'workorders',
            path : "/work-orders",
            component : ()=>import("./view/Product/Common"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'add-workorder',
            path : "/work-order/create/:productId",
            params:"productId",
            component : ()=> import("./view/Product/WorkOrder/Credit"),
            meta:{
                animation: 'zoom-fade'
            }

        },
        {
            name:'edit-workorder',
            path : "/work-order/edit",
            component : ()=> import("./view/Product/WorkOrder/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'store',
            path : "/store/:workorderId",
            component : ()=> import("./view/Product/Repairpart/Index"),
            meta:{
                animation: 'zoom-fade'
            }
        },


///deploys
        {
            name:'deploys',
            path : "/deploys",
            component : ()=> import("./view/Article/Deploy/Index"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'add-deploy',
            path : "/deploy/create",
            component : ()=> import("./view/Article/Deploy/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },
        {
            name:'edit-deploy',
            path : "/deploy/edit",
            component : ()=> import("./view/Article/Deploy/Credit"),
            meta:{
                animation: 'zoom-fade'
            }
        },




        { name:'transactions', path : "/transactions", component : Transactions},
        { name:'add-transaction', path : "/transaction/create", component : CreditTransaction},
        { name:'edit-transaction', path : "/transaction/edit", component : CreditTransaction},

        { name:'profile', path : "/profile/:id", component : UserProfile},
        { name:'users', path : "/users", component : Users},
        { name:'add-user', path : "/user/create", component : CreditUser},
        { name:'edit-user', path : "/user/edit", component : CreditUser},


    ],
    mode:'history'

})
