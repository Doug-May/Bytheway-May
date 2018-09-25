<template>
  <div id="app">
    <menu-overlay/>
    <transition name="router-anim" mode="out-in">
      <router-view/>      
    </transition>
      <Arrow/>
  </div>
</template>

<script>
import MenuOverlay from "@/components/MenuOverlay.vue";
import VideoOverlay from "@/components/VideoOverlay.vue";
import Arrow from "@/components/Arrow.vue";

export default {
  name: "App",
  components: {
    MenuOverlay,
    VideoOverlay,
    Arrow
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #1e222b;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
p {
  color: #d0d0d0;
  margin: 20px 10px;
}

p {
  font-weight: 300;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h1 {
  font-size: 35px;
  margin: 30px;
  letter-spacing: 5px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 20px;
  letter-spacing: 2px;
}

h4 {
  font-size: 13px;
}

h5 {
  font-size: 9px;
  letter-spacing: 3px;
}

@media (max-width: 568px) {
  h1 {
    font-size: 25px;
  }
  h3 {
    font-size: 18px;
  }
}

.router-anim-enter-active {
  animation: coming 900ms;
  opacity: 0;
  animation-delay: 150ms;
}
.router-anim-leave-active {
  animation: going 700ms;
  animation-delay: 150ms;
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
