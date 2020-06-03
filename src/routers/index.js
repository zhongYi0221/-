import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.use(VueRouter);

const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  {
    path:"/*",//在不匹配情况下默认匹配下面
    redirect:'/movie'
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
