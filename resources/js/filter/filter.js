import moment from "moment";
import Vue from 'vue'
Vue.filter('formatShift', function(value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
    }
})