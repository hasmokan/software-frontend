/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-13 18:14:10
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-15 09:44:59
 * @FilePath: \frontend\src\router\index.ts
 * @Description: 导航
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '../components/home/home.vue'
import transaction from '../components/transaction/transaction.vue'
import card from '../components/cardManagement/card.vue'
import deme from '../components/domestic/domestic.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/transcation',
        name: 'transaction',
        component: transaction
    },
    {
        path: '/card',
        name: 'card',
        component: card
    },
    {
        path: '/domestic',
        name: 'demestic',
        component: deme
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})

export default router
//暴露出去给vue使用
