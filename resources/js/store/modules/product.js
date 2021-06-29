import axios from "axios";

const state={

    products:[],
    product:{},
    parts:[],
    getProduct:[]
};
const getters={
    products:state=> state.products,
    product:state=>state.product,
    parts:state=>state.parts,
    getProduct:state=> state.getProduct

};
const mutations={
    initProducts(state, product){
        state.products=product;
    },
    initParts(state, product){
        state.parts=product;
    },

    initProduct(state, product){
        state.product=product;
    },
    getProduct(state, product){
        state.getProduct=product;
    },
    addProduct(state, product){
        state.products.push(product);
    },
    updateProduct(state, product){

        let index=state.products.findIndex(c=> c.id==product.id);

        if(index>-1){
            state.products[index]=product;
        }
    },
    deleteProduct(state, productID){
        let index=state.products.findIndex(c=> c.id==productID)
        if(index>-1){
            state.products.splice(index, 1)
        }
    }
};


const  actions={
    initProducts(context, type){
        axios.get('/backend/products/'+type).then(response=> {
            context.commit('initProducts', response.data.model)
        })
    },
    initParts(context, type){
        axios.get('/backend/products/'+type).then(response=> {
            context.commit('initParts', response.data.model)
        })
    },
    initProduct(context, productId){
        axios.get('/backend/product/'+productId).then(response=> {
            context.commit('initProduct', response.data.model)
        })
    },
    getProduct(context, productId){

        axios.get('/backend/product/'+productId).then(response=> {

            context.commit('getProduct', response.data.model)
        })
    },


    addProduct(context, product){

        axios.post("/backend/product", product).then(response=> {


            if(response.data.type=="success") {
                context.commit('addProduct', {id: response.data.id, ...product});
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

    updateProduct(context, product){
        axios.put('/backend/product/'+product.id, product).then(response=> {
            if(response.data.type=="success") {

                context.commit('updateProduct', product);
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
    isActiveSetter(context, product){

        axios.put("/backend/product/isActiveSetter/"+product.id, product).then(response=> {

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
    deleteProduct(context, productID){

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
                axios.delete('/backend/product/'+ productID).then(response=> {
                    if(response.data.type=="success") {
                        context.commit('deleteProduct', productID)
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