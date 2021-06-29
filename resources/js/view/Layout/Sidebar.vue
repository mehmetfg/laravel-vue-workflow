<template>
    <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
        <!-- BEGIN: Aside Menu -->
        <div
                id="m_ver_menu"
                class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
                data-menu-vertical="true"
                data-menu-scrollable="false" data-menu-dropdown-timeout="500"
        >

            <ul class="m-menu__nav   ">
                <li class="m-menu__item " aria-haspopup="true" >

                </li>

                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'home'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon fa fa-university"></i>
                            <span class="m-menu__link-text">
							Anasayfa
									</span>
                            <i></i>
                        </a>
                    </router-link>
                </li>
                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'calendar'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon fa fa-calendar-o"></i>
                            <span class="m-menu__link-text">
							Takvim
									</span>
                            <i></i>
                        </a>
                    </router-link>
                </li>
                <hr>




                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'workorders'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon fa 	fa-user-md"></i>
                            <span class="m-menu__link-text">
							Teknik Destek
									</span>
                            <i></i>
                        </a>
                    </router-link>
                </li>





                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'articles'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon fa fa-files-o"></i>
                            <span class="m-menu__link-text">
							Yazışmalar
									</span>
                            <i></i>
                        </a>
                    </router-link>
                </li>





                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'articles'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon 	fa fa-anchor "></i>
                            <span class="m-menu__link-text">
							Erişim Talepleri
									</span>
                            <i></i>
                        </a>
                    </router-link>
                </li>
                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">

                    <router-link :to="{ name:'articles'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon 		fa fa-stethoscope "></i>
                            <span class="m-menu__link-text">
							        E-imza
									</span>
                            <i></i>
                        </a>
                    </router-link>

                </li>
                <li class="m-menu__section">


                    <h4 class="m-menu__section-text">
                        Ayarlar
                    </h4>
                    <i class="m-menu__section-icon flaticon-more-v3"></i>
                </li>
                <hr>

                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                    <router-link :to="{ name:'users'}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon fa fa-users"></i>
                            <span class="m-menu__link-text">
							Kullanıcılar
									</span>
                            <i></i>
                        </a>
                    </router-link>

                </li>


                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                    <router-link :to="{ name:'profile', params:{id:'1'}}" class="m-menu__link ">

                        <a>
                            <i class="m-menu__link-icon flaticon-profile-1"></i>
                            <span class="m-menu__link-text">
							Profil
									</span>
                            <i></i>
                        </a>
                    </router-link>

                </li>
                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">


                        <a href="/workorder/query" class="m-menu__link">
                            <i class="m-menu__link-icon flaticon-search"></i>
                            <span class="m-menu__link-text">
						w	Cihaz Sorgulama
									</span>
                            <i></i>
                        </a>

                </li>
            </ul>
        </div>
        <!-- END: Aside Menu -->
    </div>
</template>

<script>
    export default {
        created(){

            this.$store.dispatch("initUser");
        }

    }
</script>

<style scoped>

</style>