import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BookDetail from "./views/BookDetail.vue";
import DisplayResults from "./views/DisplayResults.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "search/:id",
      name: "search",
      component: DisplayResults
    },
    {
      path: "/book/:id",
      name: "book",
      props: true,
      component: BookDetail
    }
  ]
});
