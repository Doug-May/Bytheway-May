<template>
  <transition name="arrowFade" mode="in-out">   
      <div v-if="showArrow" id="arrow" @click="toTop">      
          <div class="top"></div>  
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleArrow() {
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
    window.addEventListener("scroll", this.handleArrow);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleArrow);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#arrow {
  z-index: 2;
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 10px;
}

.top {
  transition: 200ms;
  display: inline-block;
  width: 2.3em;
  height: 2.3em;
  border: 0.1em solid #f4f4f4;
  background-color: #1e222b;
  border-radius: 50%;
  margin-right: 0.4em;
  opacity: 0.7;
}

.top:hover {
  opacity: 0.2;
}

.top:after {
  content: "";
  display: inline-block;
  margin-top: 0.8em;
  width: 0.8em;
  height: 0.8em;
  border-top: 0.2em solid #a39275;
  border-right: 0.2em solid #a39275;
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border-radius: 2px;
}

.arrowFade-enter-active {
  animation: coming 900ms;
  opacity: 0;
  animation-delay: 150ms;
}
.arrowFade-leave-active {
  animation: going 700ms;
  animation-delay: 150ms;
}

@keyframes going {
  from {
    transform: translateY(0);
    opacity: 1;
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
