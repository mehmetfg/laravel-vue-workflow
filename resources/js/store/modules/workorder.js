import axios from "axios";

const state={

    workorders:[],
    workorder:[],
    initWorkorderProduct:[]

};
const getters={
    workorders:state=> state.workorders,
    workorder:state=>state.workorder,
    initWorkorderProduct:state=>state.initWorkorderProduct
};
const mutations={
    initWorkorders(state, workorder){
        state.workorders=workorder;
    },

    initWorkorder(state, workorder){
        state.workorder=workorder;
    },
    initWorkorderProduct(state, workorder){
        state.initWorkorderProduct=workorder;
    },

    addWorkorder(state, workorder){
        state.workorders.push(workorder);
    },
    updateWorkorder(state, workorder){

        let index=state.workorders.findIndex(c=> c.id==workorder.id);

        if(index>-1){
            state.workorders[index]=workorder;
        }
    },
    deleteWorkorder(state, workorderID){
        let index=state.workorders.findIndex(c=> c.id==workorderID)
        if(index>-1){
            state.workorders.splice(index, 1)
        }
    }
};


const  actions={
    initWorkorders(context){
        axios.get('/backend/workorders/').then(response=> {
            context.commit('initWorkorders', response.data.model)
        })
    },
    initWorkorderProduct(context, productId){
        axios.get('/backend/workorder/product/'+productId).then(response=> {
            context.commit('initWorkorderProduct', response.data.model)
        })
    },

    initWorkorder(context, workorderId){
        axios.get('/backend/workorder/'+workorderId).then(response=> {
            context.commit('initWorkorder', response.data.model)
        })
    },
    addWorkorder(context, workorder){

        axios.post("/backend/workorder", workorder).then(response=> {


            if(response.data.type=="success") {
                context.commit('addWorkorder', {id: response.data.id, ...workorder});
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

    updateWorkorder(context, workorder){
        axios.put('/backend/workorder/'+workorder.id, workorder).then(response=> {
            if(response.data.type=="success") {

                context.commit('updateWorkorder', workorder);
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
    isActiveSetter(context, workorder){

        axios.put("/backend/workorder/isActiveSetter/"+workorder.id, workorder).then(response=> {

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
    deleteWorkorder(context, workorderID){

        swal({

            title: "SİLME İŞLEMİ",
            text: "<b>Silmek İstediğinizden Eminmisiniz!?</b>",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Kabul Ediyorum",
        }).then((result) => {
            if (result.value) {
                axios.delete('/backend/workorder/'+ workorderID).then(response=> {
                    if(response.data.type=="success") {
                        context.commit('deleteWorkorder', workorderID)
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
        })


    }

};

export default {

    state,
    mutations,
    actions,
    getters

}