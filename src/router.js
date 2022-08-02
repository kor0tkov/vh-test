import { createRouter, createWebHashHistory } from "vue-router";
import PageHome from "@/views/PageHome.vue";
import PageGallery from "@/views/PageGallery.vue";
import PageLong from "@/views/PageLong.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome
  },
  {
    path: "/gallery",
    name: "PageGallery",
    component: PageGallery
  },
  {
    path: "/long",
    name: "PageLong",
    component: PageLong
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
