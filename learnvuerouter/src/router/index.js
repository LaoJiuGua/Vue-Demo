// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'


// 1 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 创建VueRouter对象
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]
// 2 创建路由对象
const router = new VueRouter({
    // 配置路由和组件之间的关系
    routes
})

// 3 将router对象传入vue实例
export default router