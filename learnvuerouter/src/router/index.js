// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 创建VueRouter对象
const routes = [
    {
        path: '',
        // redirect重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                // redirect重定向
                redirect: 'news'
            },
            {
                path: "news",
                component: HomeNews
            },
            {
                path: "message",
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    },
    {
        path:'/profile',
        component:Profile
    }
]

// 2 创建路由对象
const router = new VueRouter({
    // 配置路由和组件之间的关系
    routes,
    mode: 'history'
})

// 3 将router对象传入vue实例
export default router