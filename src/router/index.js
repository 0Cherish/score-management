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
                    path: 'student',
                    name:'user-student',
                    component:()=>import('../views/user/student')
                },
                {
                    path: 'course',
                    name:'user-course',
                    component:()=>import('../views/user/course')
                },
                {
                    path: 'score',
                    name:'user-score',
                    component:()=>import('../views/user/score')
                },
                {
                    path: 'personal',
                    name:'user-personal',
                    component:()=>import('../views/user/personal')
                }
            ]
        },

        {
            path:'/admin',
            name:'admin',
            component:()=>import('../views/admin/index'),
            children:[
                {
                    path: 'student',
                    name: 'admin-student',
                    component:()=>import('../views/admin/student')
                },
                {
                    path: 'teacher',
                    name:'admin-student',
                    component:()=>import('../views/admin/teacher')
                },
                {
                    path: 'personal',
                    name: 'admin-personal',
                    component:()=>import('../views/admin/personal')
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
