import axios from "axios";const state={    deploys:[],    deploy:{},};const getters={    deploys:state=>state.deploys,    deploy:state=>state.deploy};const mutations={    initDeploys(state, deploy){        state.deploys=deploy;    },    initDeploy(state, deploy){        state.deploy=deploy;    },    addDeploy(state, deploy){        state.deploys.push(deploy);    },    updateDeploy(state, deploy){        let index=state.deploys.findIndex(c=> c.id==deploy.id);        if(index>-1){            state.deploys[index]=deploy;        }    },    deleteDeploy(state, deployID){        let index=state.deploys.findIndex(c=> c.id==deployID)        if(index>-1){            state.deploys.splice(index, 1)        }    }};const  actions={    initDeploys(context, payload){        axios.get('/backend/deploys/'+payload).then(response=> {            context.commit('initDeploys', response.data.model)        })    },    initDeploy(context, deployId){        axios.get('/backend/deploy/'+deployId).then(response=> {            context.commit('initDeploy', response.data.model)        })    },    addDeploy(context, deploy){        axios.post("/backend/deploy", deploy).then(response=> {            if(response.data.type=="success") {                context.commit('addDeploy', {id: response.data.id, ...deploy});            }            swal({                position: 'center',                type: response.data.type,                title: response.data.title,                text: response.data.message,                showConfirmButton: false,                timer: 1500            });         })    },    updateDeploy(context, deploy){        axios.put('/backend/deploy/'+deploy.id, deploy).then(response=> {            if(response.data.type=="success") {                context.commit('updateDeploy', deploy);            }            swal({                position: 'center',                type: response.data.type,                title: response.data.title,                text: response.data.message,                showConfirmButton: false,                timer: 1500            });         })    },    deployStatusSetter(context, deploy){        axios.post("/backend/deploy/statusSetter/"+deploy.id, deploy).then(response=> {            swal({                position: 'center',                type: response.data.type,                title: response.data.title,                text: response.data.message,                showConfirmButton: false,                timer: 1500            });         })    },    deleteDeploy(context, deployID){        swal({            title: "SİLME İŞLEMİ",            text: "<b>Silmek İstediğinizden Eminmisiniz!?</b>",            type: 'warning',            showCancelButton: true,            confirmButtonColor: '#3085d6',            cancelButtonColor: '#d33',            confirmButtonText: "Kabul Ediyorum",        }).then((result) => {            if (result.value) {                axios.delete('/backend/deploy/'+ deployID).then(response=> {                    if(response.data.type=="success") {                        context.commit('deleteDeploy', deployID)                    }                    swal({                        position: 'center',                        type: response.data.type,                        title: response.data.title,                        text: response.data.message,                        showConfirmButton: false,                        timer: 1500                    });                 })            }        })    }};export default {    state,    mutations,    actions,    getters}