<template>
    <div is="transition-group" name="list" mode="out-in" type="transition">>
    <div class="m-widget25__progress" v-for="(item, index) in articlePercents"     :style="{transitionDelay: (index * 0.1) + 's'}" :key="item.id">
													<span class="m-widget25__progress-number">
														{{Math.round(parseInt(item.counttrue)/(parseInt(item.counttrue)+parseInt(item.countfalse))*100)}}%
													</span>
        <span class="m-widget25__progress-number pull-right">
														<b>{{item.sender_date | formatShift}}</b>
													</span>
        <div class="m--space-10"></div>

        <div class="progress">
            <div class="progress-bar  bg-info" :class="{'progress-bar progress-bar bg-warning':(new Date()>new Date(item.deploy_date)), 'progress-bar progress-bar bg-danger':(new Date()>new Date(item.sender_date))}"    role="progressbar" :style="{width: Math.round(parseInt(item.counttrue)/(parseInt(item.counttrue)+parseInt(item.countfalse))*100)+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <span class="m-widget25__progress-sub">
												 <router-link
                :to="{ name:'article-common', params : { articleId : item.id}}">

                                        <a class="text-sm-right">
                                               <b>{{item.name}}</b>

                                        </a>
                                    </router-link>
													</span>
        <span class="m-widget25__progress-sub pull-right">

													</span>
        <hr></div>
    </div>
</template>

<script>
    export default {
        created(){
            this.$store.dispatch("initArticlePercent")

        },
        computed:{

            articlePercents(){

                return this.$store.getters.articlePercent
            }
        }
    }
</script>

<style scoped>

</style>