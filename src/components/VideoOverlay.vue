<template>
  <div>
    <div class="video-container">
      <div class="tube"></div>
      <div class="close">
        <div class="Bar1"></div>
        <div class="Bar2"></div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "VideoOverlay"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-container {
  background-color: #000000;
  border-style: none;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.close {
  z-index: 101;
  position: absolute;
  top: 35px;
  right: 40px;
}

.Bar1,
.Bar2 {
  z-index: 100;
  width: 30px;
  height: 3px;
  border-radius: 60px;
  background-color: #d0d0d0;
  margin: 6px 6px;
  transition: 0.3s;
}

/* Rotate first bar */
.Bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}

/* Rotate last bar */
.Bar2 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(0, -2px);
}
</style>
