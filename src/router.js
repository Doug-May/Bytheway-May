import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Work from "./views/Work.vue";
import Music from "./views/Music.vue";
import Tools from "./views/Tools.vue";
import Gallery from "./views/Gallery.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/music",
      name: "music",
      component: Music
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 850);
    });
  }
});
