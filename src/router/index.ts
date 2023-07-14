import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '../components/home/home.vue'
import esg from '../components/esg/esg.vue'
import inter from '../components/international/international.vue'
import deme from '../components/domestic/domestic.vue'
import eg from '../components/esg/esgReport.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/esg',
        name: 'esg',
        component: esg
    },
    {
        path: '/international',
        name: 'international',
        component: inter
    },
    {
        path: '/domestic',
        name: 'demestic',
        component: deme
    },
    {
        path: '/esgReport',
        name: 'esg-report',
        component: eg
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})

export default router
//暴露出去给vue使用
