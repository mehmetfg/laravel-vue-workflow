<template>

        <div class="m-portlet m-portlet--tabs">
            <div class="m-portlet m-portlet--tabs">


                <div class="tab-content">


                    <div class="m-portlet__body">

            <div class='demo-app'>
                <div class='demo-app-top'>

                </div>

                <FullCalendar
                        eventBorderHeight="2px"


                        all-day-default="true"
                        :locale="trLocale"
                        :theme-system="themeSystem"
                        event-color="blue"
                        event-text-color="white"
                        ref="fullCalendar"
                        defaultView="dayGridMonth"
                        :header="{

        left: 'prev,next today',

        center: 'title',
        right: 'year,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
                        :plugins="calendarPlugins"
                        :weekends="calendarWeekends"
                        :events="calendarEvents"

                />
            </div>
        </div>
    </div>
            </div>
        </div>

    </template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'



    import trLocale from '@fullcalendar/core/locales/tr';
    import bootstrapPlugin from '@fullcalendar/bootstrap';
    export default {
        components: {
            FullCalendar, // make the <FullCalendar> tag available
        },
        data: function() {
            return {

                trLocale:trLocale,
                calendarPlugins: [ // plugins must be defined in the JS
                    dayGridPlugin,


                    bootstrapPlugin
                    // needed for dateClick
                ],

                themeSystem: 'bootstrap',
                googleCalendarApiKey: 'AIzaSyCy1gZVQYmMnLDyIbsD3wrZ1Kktf4yPUvk',
                events: {
                    googleCalendarId: 'mehmetfg@gmail.com'
                },
                calendarWeekends: true,


            }
        },
        methods: {
            toggleWeekends() {
                this.calendarWeekends = !this.calendarWeekends // update a property
            },
            gotoPast() {
                let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
                calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
            },

            handleDateClick(arg) {


                if (confirm('Would you like to add an event to ' + arg.date + ' ?')) {
                    this.calendarEvents.push({ // add new event data
                        title: 'Yeni Olay',
                        start: arg.date,
                        allDay: false
                    })
                }
            }
        },

        created(){

            this.$store.dispatch("initCalendarData")






        },
        beforeCreate(){



        },
        computed:{

            calendarEvents(){

                return this.$store.getters.calendarData
            }
        }

    }
</script>

<style lang='scss'>
    // you must include each plugins' css
    // paths prefixed with ~ signify node_modules
    @import '../../../../../node_modules/@fullcalendar/core/main.css';
    @import '../../../../../node_modules/@fullcalendar/daygrid/main.css';

</style>