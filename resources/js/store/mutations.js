  const mutations = {

    initArticlePercent(state, article) {

        state.articlePercent = article
    },
    initInstitutions(state, institutions){

        state.institutions=institutions
    },
    initCalendarData(state, payload){
        state.calendarData=payload

    }
};
export  default mutations
