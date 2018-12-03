<template>
    <div>
        <transition name="player-anim">            
                <div class="video-container" v-show="showPlayer">   
                    <iframe
                    id="video" 
                    v-bind:src="src" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen >
                    </iframe> 
                    <div class="close" @click="closePlayer">
                        <div class="Bar1"></div>
                        <div class="Bar2"></div>
                    </div>
                </div>                                                 
        </transition>
        <div style="height:100px"></div>
        <div class="container text-center">
            <!-- <h1>WORK</h1> -->
        </div>
        <div class="container text-center">

            <div class="row  justify-content-center">
                <div class="col-md-7">
                    <div class="video">
                        <img @click="openPlayer('https://player.vimeo.com/video/304229569?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/demo.png">
                        <h2 id="demoText">DEMO REEL</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://player.vimeo.com/video/285035791?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/porsche.jpeg">
                    </div>
                    <h3>CLIENT // PORSCHE<br>ROLE // MUSIC, SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://player.vimeo.com/video/236876823?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/F&I.png">
                    </div>
                    <h3>CLIENT // ABANDON VISUALS<br>ROLE // SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">                        
                        <img @click="openPlayer('https://player.vimeo.com/video/278197096?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/Michelin.png">
                    </div>
                    <h3>CLIENT // MICHELIN<br>ROLE // SOUND DESIGN AND MIX</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    
                    <div class="video">                        
                        <img @click="openPlayer('https://www.youtube.com/embed/0cVgUhSt6Zc?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/LOS.jpeg">
                        
                    </div>
                    <h3>CLIENT // ABANDON VISUALS<br>ROLE // MUSIC, SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">            
                        <img @click="openPlayer('https://www.youtube.com/embed/hVvEISFw9w0?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/morocco.png">
                    </div>
                    <h3>CLIENT // MYSTERY BOX<br>ROLE // MUSIC</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/mHUOCxVT5ro?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/yellowstone.png">
                    </div>
                    <h3>CLIENT // MYSTERY BOX<br>ROLE // MUSIC</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="video">        
                        <img @click="openPlayer('https://player.vimeo.com/video/271709543?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/Trek.png">
                    </div>
                    <h3>CLIENT // TREK<br>ROLE // MUSIC, SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/ipJYTrBbaCc?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/Ballistix.png">
                    </div>
                    <h3>CLIENT // BALLISTIX GAMING<br>ROLE // MUSIC, SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/rwt8M_oQxsY?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/ABC.png">
                    </div>
                    <h3>CLIENT // ABC MOUSE<br>ROLE // MUSIC</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/7rVFgDBQv2Y?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/TNC.png">
                    </div>
                    <h3>CLIENT // BYUTV - THE NEW CREATIVES<br>ROLE // SERIES SCORE</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/illDZ9fKSGk?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/IC.jpg">
                    </div>
                    <h3>CLIENT // MYSTERY BOX<br>ROLE // FEATURE SCORE</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/QoyFxuFh3AE?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/H.png">
                    </div>
                    <h3>CLIENT // MYSTERY BOX<br>ROLE // MUSIC</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://player.vimeo.com/video/205627512?autoplay=1&color=1e222b&byline=1&portrait=0')" class="imgPlay" src="../assets/work/ATP.png">
                    </div>
                    <h3>CLIENT // ATPHETICS FITNESS<br>ROLE // SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/tMjQJWirxio?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/FORD.png">
                    </div>
                    <h3>CLIENT // ABANDON VISUALS<br>ROLE // MUSIC, SOUND DESIGN AND MIX</h3>
                </div>
                <div class="col-md-4">
                    <div class="video">
                        <img @click="openPlayer('https://www.youtube.com/embed/Pgd2kWuOtwE?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0')" class="imgPlay" src="../assets/work/HOLY.png">
                    </div>
                    <h3>CLIENT // JARED COOK<br>ROLE // MUSIC</h3>
                </div>
            </div>
            <div style="height: 70px"></div>
        </div>
        </div>
</template>

<script>
export default {
  data: function() {
    return {
      showPlayer: false,
      src: ""
    };
  },
  methods: {
    closePlayer() {
      this.src = "";
      this.showPlayer = false;
    },
    openPlayer(src) {
      this.showPlayer = true;
      this.src = src;
    }
  }
};
</script>


<style scoped>
h3 {
  font-size: 11px;
  opacity: 0.7;
  margin-bottom: 40px;
  margin-top: 10px;
  line-height: 14px;
}

#demoText {
  position: absolute;
  bottom: 15%;
  left: 50%;
  margin-left: -90px;
}

iframe {
  width: 100%;
  height: 100%;
}

.video img {
  transition: 200ms;
  opacity: 0.8;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.video img:hover {
  opacity: 0.4;
}

.video-container {
  background-color: #000000;
  border-style: none;
  z-index: 100;
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
  top: 30px;
  left: 60px;
}

.Bar1,
.Bar2 {
  width: 30px;
  height: 3px;
  border-radius: 60px;
  background-color: #d0d0d0;
  margin: 6px 6px;
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

.player-anim-enter-active {
  animation: coming 500ms;
  opacity: 0;
}
.player-anim-leave-active {
  animation: going 500ms;
}
@keyframes going {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
