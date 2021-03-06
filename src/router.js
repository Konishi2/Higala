import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Signup from "./views/Signup.vue";
import Contribute from "./views/Contribute.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/contribute",
      name: "contribute",
      component: Contribute
    },
    {
      path: "/404",
      name: "404 Page",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
