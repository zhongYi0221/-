export default {
    path: "/movie",
    // component : () => import("@/views/Movie")
    component: () => import("../../views/Movie/index.vue"),
    children:[
        {
        path:"city",//"/city"绝对路径地址栏不拼接movie,"city"相对路径会拼接这里用相对
            component:()=> import('../../components/City/index.vue')
    },
        {
            path:"comingSoon",
            component:()=> import('../../components/ComingSoon/index.vue')
        },
        {
            path:"nowPlaying",
            component:()=> import('../../components/NowPlaying')//使用es6语法引入文件吧，不然报错无言以对
        },
        {
            path:"search",
            component:()=> import('../../components/Search')
        },
        {
            path: '/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}