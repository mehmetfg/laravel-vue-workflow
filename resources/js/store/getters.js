 const getters = {

    deployStatus(state) {

        return state.deployStatus
    },
    articlePercent(state) {

        return state.articlePercent
    },
    institutions(state){

        return state.institutions
    },
    calendarData(state){

        return state.calendarData
    },

     workorderStatus: state=> state.workorderStatus
};
export  default getters

