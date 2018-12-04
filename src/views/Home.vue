<template>
<div>
  <!-- video header with overlay and text here -->
  <header class="v-header">
    <div v-if="showVideo" id="video" class="fullscreen-video-wrap">
      <video src="../assets/BMPorsche.mp4" autoplay="true" loop="true" muted></video>      
    </div>
    <div id="header-overlay" class="header-overlay"><div id="arrowDown"></div></div>
    <div class="header-content container text-center">
      <img id="mainLogo" src="../assets/logo.png">
      <h1 id="title">MUSIC + SOUND</h1>
    </div>    
  </header>

  <!-- content that goes after the video header -->
  <section class="section section-light">
    <div class="container text-center">
      <h1>SERVICES</h1>
      <div class="row">
        <div class="hidden col-md-4">
          <h3>MUSIC COMPOSITION</h3>
          <p>We take pride in offering our clients quality original music that enhances visual storytelling. Our work
            has been featured in documentaries, feature length films, TV series, as well as various productions
            worldwide. We also have a large library of music available for custom licensing.</p>
        </div>
        <div class="hidden col-md-4">
          <h3>SOUND DESIGN</h3>
          <p>Our attention to detail, passion for high definition audio, and creative insight makes us especially
            suited for creative sound design. We love compelling storytelling and believe that sound design plays an
            integral role. We offer designing everything from simple and subtle, to surreal and complex.</p>
        </div>
        <div class="hidden col-md-4">
          <h3>MIXING & MASTERING</h3>
          <p>Our tools make us a world-class production/post-production soundhouse and recording studio. We offer our
            clients the highest quality stereo and 5.1 surround sound mixing and mastering. We have the experience to
            help you clean up and mix your audio, taking your production to the next level.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="img1">
    <div class="imgTextWrap">  
        <h1 class="imgText" @click="menuRoute('/work')">WORK</h1>        
    </div>
  </div>

  <section class="section section-light">
    <div class="container text-center">
      <h1>ABOUT</h1>
      <div class="row">
        <div class="col-md-6">
          <img id="BMPic" src="../assets/BM3.jpg" alt="">
        </div>
        <div class="col-md-6">
          <p>Bytheway-May (Brenden Bytheway and Doug May) is a music and post-production sound duo based in Utah. We
            are both songwriters, producers, mixers, and engineers. We have been lucky enough to work on many different
            projects as well as having music and sound design featured in productions worldwide. With a shared passion
            for music and audio, we understand the effect that it has on storytelling and impact. As true audiophiles,
            we realize what quality music and audio does for a film. Let us help you with your next project.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="img2">
    <div class="imgTextWrap">  
        <h1 class="imgText" @click="menuRoute('/tools')">TOOLS</h1>       
    </div>
  </div>
  <contact />
  <Footer />
</div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Contact,
    Footer
  },
  data: function() {
    return {
      showVideo: false
    };
  },
  methods: {
    menuRoute(view) {
      this.$router.push(view);
    }
  },
  created: function() {
    // add video if user is on desktop
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.showVideo = true;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  overflow-x: hidden;
}

.v-header {
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
}

.fullscreen-video-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-video-wrap video {
  min-width: 100%;
  min-height: 100%;
}

.header-overlay {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #1f242d;
  z-index: 1;
  opacity: 0.95;
}

.header-content {
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
  z-index: 2;
}

#mainLogo {
  opacity: 0.6;
  width: 90%;
  max-width: 550px;
  animation-duration: 1.6s;
  animation-delay: 0.6s;
  animation-timing-function: ease-in-out;
}

.img1 {
  background-image: url("../assets/1new.jpg");
  min-height: 300px;
  position: relative;
  /* opacity: 0.3; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.img2 {
  background-image: url("../assets/2new.jpg");
  min-height: 300px;
  position: relative;
  /* opacity: 0.3; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

@media (max-width: 568px) {
  .img1,
  .img2 {
    background-attachment: scroll;
  }
  #title {
    font-size: 26px;
  }
  h3 {
    font-size: 20px;
  }
}

.section {
  padding-top: 50px;
  padding-bottom: 50px;
}

.section-light {
  background-color: #f4f4f4;
}

.section-light a {
  transition: 300ms;
  color: #a85a5a;
}

.section-light a:hover {
  color: #5b5b5b;
}

.section-dark {
  background-color: #1f242d;
}

.section-light h1,
.section-light h3 {
  color: #5b5b5b;
}

.section-light p {
  color: #5b5b5b;
}

.imgTextWrap {
  position: absolute;
  top: 85px;
  width: 100%;
  letter-spacing: 5px;
  text-align: center;
}

.imgText {
  transition: 200ms;
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  border: solid 2px #d0d0d0;
  border-radius: 5px;
}

.imgText:hover {
  border-color: #f4f4f4;
  color: #5b5b5b;
  background-color: #f4f4f4;
}

#BMPic {
  border-radius: 5px;
  width: 100%;
  opacity: 0.9;
}

#title {
  animation: fadeDown 2000ms 1 forwards;
  animation-delay: 200ms;
  opacity: 0;
}

#arrowDown {
  position: absolute;
  bottom: 20px;
  left: 50%;
  border-style: solid;
  color: #d0d0d0;
  border-width: 0px 2px 2px 0;
  border-radius: 10%;
  transform: rotate(45deg);
  display: inline-block;
  padding: 3px;
  z-index: 3;
  animation: flash 2s ease-in-out infinite;
}


@keyframes fadeDown {
  0% {
    transform: translate(0px, -50px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
  }
}
</style>
