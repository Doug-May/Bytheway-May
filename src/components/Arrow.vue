<template>
  <transition name="fade">
  <div v-if="showArrow" id="arrow" class="arrowCircle" @click="toTop">
    <div class="arrows">
      <div class="arrowBar1"></div>
      <div class="arrowBar2"></div>
    </div>    
  </div>
  </transition>
</template>

<script>
export default {
  name: "Arrow",
  data: function() {
    return {
      showArrow: false
    };
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (distance > 80) {
        this.showArrow = true;
      } else {
        this.showArrow = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#arrow {
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 10px;
}

.arrowBar1,
.arrowBar2 {
  z-index: 100;
  width: 18px;
  height: 3px;
  border-radius: 60px;
  background-color: #f4f4f4;
  margin: 6px 6px;
  transition: 0.3s;
}

.arrows {
  transform: translate(11px, 12px);
}

.arrowCircle {
  z-index: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5b5b5b;
  margin: 6px 6px;
  transition: 0.3s;
}

.arrowCircle:hover {
  background-color: #d0d0d0;
}

.arrowBar1 {
  transform: rotate(45deg);
}

.arrowBar2 {
  transform: rotate(-45deg) translate(-2px, -15px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
