<template>
<div>
  <div id="app" class="fadeIn">
    <menu-overlay/>
    <transition name="router-anim" mode="out-in">
      <router-view/>      
    </transition>
    <Arrow/>      
  </div>  
</div>
  
</template>

<script>
import MenuOverlay from "@/components/MenuOverlay.vue";
import Arrow from "@/components/Arrow.vue";

export default {
  name: "App",
  components: {
    MenuOverlay,
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
  opacity: 0.7;
}

h2 {
  font-size: 30px;
  opacity: 0.7;
}

h3 {
  font-size: 22px;
  letter-spacing: 2px;
  opacity: 0.7;
}

h4 {
  font-size: 13px;
  opacity: 0.7;
}

h5 {
  font-size: 9px;
  letter-spacing: 2.5px;
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
.fadeIn {
  opacity: 0;
  animation: fadeIn 3000ms forwards 1;
  animation-delay: 500ms;
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
@keyframes fadeIn {
  from {
    /* transform: translate(0px, 30px); */
    opacity: 0;
  }
  to {
    /* transform: translate(0px, 0px); */
    opacity: 1;
  }
}
</style>
