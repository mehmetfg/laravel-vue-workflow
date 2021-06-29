import axios from "axios";

const state={

    repairparts:[],
    repairpart:{},
    repair:[]

};
const getters={
    repairparts:state=> state.repairparts,
    repairpart:state=>state.repairpart,
    repair:state=> state.repair

};
const mutations={
    initRepairparts(state, repairpart){
        state.repairparts=repairpart;
    },

    initRepairpart(state, repairpart){
        state.repairpart=repairpart;
    },
    initRepair(state, repairpart){
        state.repair=repairpart;
    },

    addRepairpart(state, repairpart){
        state.repairparts.push(repairpart);
    },
    updateRepairpart(state, repairpart){

        let index=state.repairparts.findIndex(c=> c.id==repairpart.id);

        if(index>-1){
            state.repairparts[index]=repairpart;
        }
    },
    deleteRepairpart(state, repairpartID){
        let index=state.repair.findIndex(c=> c.id==repairpartID)
        if(index>-1){
            state.repair.splice(index, 1)
        }
    }
};


const  actions={
    initRepairparts(context){
        axios.get('/backend/repairparts/').then(response=> {
            context.commit('initRepairparts', response.data.model)
        })
    },
    initRepairpart(context, repairpartId){
        axios.get('/backend/repairpart/'+repairpartId).then(response=> {
            context.commit('initRepairpart', response.data.model)
        })
    },

    initRepairpartForProduct(context, partId){
        axios.get('/backend/repairparts/product/'+partId).then(response=> {
            context.commit('initRepairpart', response.data.model)
        })
    },
    initRepair(context, workId){
        axios.get('/backend/repairparts/workorder/'+workId).then(response=> {
            context.commit('initRepair', response.data.model)
        })
    },

    addRepairpart(context, repairpart){

        axios.post("/backend/repairpart", repairpart).then(response=> {


            if(response.data.type=="success") {
                context.commit('addRepairpart', {id: response.data.id, ...repairpart});
            }
            swal({
                position: 'center',
                type: response.data.type,
                title: response.data.title,
                text: response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        })
    },

    updateRepairpart(context, repairpart){
        axios.put('/backend/repairpart/'+repairpart.id, repairpart).then(response=> {
            if(response.data.type=="success") {

                context.commit('updateRepairpart', repairpart);
            }

            swal({
                position: 'center',
                type: response.data.type,
                title: response.data.title,
                text: response.data.message,
                showConfirmButton: false,
                timer: 1500
            });

        })

    },
    isActiveSetter(context, repairpart){

        axios.put("/backend/repairpart/isActiveSetter/"+repairpart.id, repairpart).then(response=> {

            swal({
                position: 'center',
                type: response.data.type,
                title: response.data.title,
                text: response.data.message,
                showConfirmButton: false,
                timer: 1500
            });


        })
    },
    deleteRepairpart(context, repairpartID){

                axios.delete('/backend/repairpart/'+ repairpartID).then(response=> {
                    if(response.data.type=="success") {
                        context.commit('deleteRepairpart', repairpartID)
                    }

                    swal({
                        position: 'center',
                        type: response.data.type,
                        title: response.data.title,
                        text: response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
            }





};

export default {

    state,
    mutations,
    actions,
    getters

}