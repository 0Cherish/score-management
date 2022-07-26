import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/login'
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('../views/login/index'),
            children: [
                {
                    path: '/username',
                    name: 'username',
                    component: ()=>import('../views/login/login-username')
                },
                {
                    path: '/mobile',
                    name: 'mobile',
                    component: ()=>import('../views/login/login-mobile')
                },
                {
                    path: '/email',
                    name: 'email',
                    component: ()=>import('../views/login/login-email')
                },
            ]
        },

        {
            path: '/user',
            name: 'user',
            component: ()=>import('../views/user/index'),
            children:[
                {
                    path: '/student',
                    name:'student',
                    component:()=>import('../views/user/student')
                },
                {
                    path: '/course',
                    name:'course',
                    component:()=>import('../views/user/course')
                },
                {
                    path: '/class',
                    name:'class',
                    component:()=>import('../views/user/class')
                },
                {
                    path: '/personal',
                    name:'personal',
                    component:()=>import('../views/user/personal')
                }
            ]
        },



        {
            path: '*',
            name: 'NotFound',
            component: ()=>import('../views/error-page/404')
        }
    ]
})
