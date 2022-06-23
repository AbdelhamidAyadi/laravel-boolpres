import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import NotFound from './components/NotFound.vue'

const router = new VueRouter({
    mode : 'history',
    routes:[
        {path:'/' , component: HomePage},
        {path:'/aboutus' , component: AboutUs},
        {path:'*' , component: NotFound}
    ]
});

export default router; 