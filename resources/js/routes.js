import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HomePage from './components/HomePage.vue'    
import AboutUs from './components/AboutUs.vue'
import NotFound from './components/NotFound.vue'
import PostDetails from './components/PostDetails.vue'

const router = new VueRouter({
    mode : 'history',
    routes:[
        {path:'/' , component: HomePage},
        {path:'/aboutus' , component: AboutUs},
        {path:'/posts/:id' , component: PostDetails , name:'PostDetails'},
        {path:'*' , component: NotFound}
        
    ]
});

export default router; 