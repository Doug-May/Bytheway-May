<template>
<div>
    <div id="hamburgerIcon" @click="menuToggle">
        <div class="hamBar1"></div>
        <div class="hamBar2"></div>
        <div class="hamBar3"></div>
    </div>
    <div id="menu" @click="menuToggle">
        <div class="links">
          <h2 @click="menuRoute('/')">HOME</h2><br>
          <h2 @click="menuRoute('work')">WORK</h2><br>
          <h2 @click="menuRoute('music')">MUSIC</h2><br>
          <h2 @click="menuRoute('tools')">TOOLS</h2><br>
          <h2 @click="menuRoute('gallery')">GALLERY</h2>
        </div>
    </div>  
</div>
</template>

<script>
export default {
  name: "MenuOverlay",
  data: function() {
    return {
      menuOpen: false
    };
  },
  methods: {
    menuToggle() {
      let menu = document.getElementById("menu");
      let hamburger = document.getElementById("hamburgerIcon");
      hamburger.classList.toggle("change");
      if (this.menuOpen) {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        hamburger.style.position = "absolute";
        this.menuOpen = !this.menuOpen;
      } else {
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        hamburger.style.position = "fixed";
        this.menuOpen = !this.menuOpen;
      }
    },
    menuRoute(view) {
      this.$router.push(view);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

#menu {
  visibility: hidden;
  opacity: 0;
  text-align: center;
  transition: 200ms;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #101319;
  width: 100%;
  height: 100vh;
  padding-top: 20vh;
  z-index: 4;
}

#menu h2 {
  transition: 300ms;
  cursor: pointer;
  margin-top: 5px;
  opacity: 0.5;
  display: inline-block;
}

#menu h2:hover {
  opacity: 0.8;
}

#hamburgerIcon {
  position: absolute;
  z-index: 5;
  top: 45px;
  right: 11%;
  cursor: pointer;
  transition: 400ms;
}

#hamburgerIcon:hover {
  opacity: 0.5;
}

.links {
  position: absolute;
  top: 50%;
  margin-top: -160px;
  width: 100%;
}

.hamBar1,
.hamBar2,
.hamBar3 {
  z-index: 100;
  width: 30px;
  height: 3px;
  border-radius: 60px;
  background-color: #5b5b5b;
  margin: 6px 6px;
  transition: 0.3s;
}

/* Rotate first bar */
.change .hamBar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}

/* Fade out the second bar */
.change .hamBar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .hamBar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-7px, -8px);
}
</style>
