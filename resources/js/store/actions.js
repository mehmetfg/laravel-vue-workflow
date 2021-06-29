import axios from "axios";

  const actions = {

    initArticlePercent(context) {

        axios.get("/backend/percent").then(response => {

            context.commit("initArticlePercent", response.data.model);

        })
    },

    initInstitutions(context){

        axios.get("/backend/institutions/2").then(response=> {

            context.commit("initInstitutions", response.data.model)

        })
    },
    initCalendarData(context){
        axios.get("/backend/calendar").then(response=> {

            context.commit("initCalendarData", response.data.model)
        })
w
    }


}

export default actions