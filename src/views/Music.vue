<template>
    <div>
        <div style="height:100px"></div>
        <div class="container text-center">
            <h1>MUSIC</h1>
        </div>
        <div id="music" class="container text-center">
            <h3 class="lightFont"><span @click="toggleCinematic" v-bind:class="{ selected: showCinematic }">Cinematic</span> | <span @click="toggleCommercial" v-bind:class="{ selected: showCommercial }">Commercial</span></h3>
            <transition name="music-anim" >
              <iframe v-if="showCinematic" id="playlist" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/347178291%3Fsecret_token%3Ds-YcqZZ&amp;color=51596b&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
                  frameborder="0"></iframe>         
              <iframe v-if="showCommercial" id="playlist" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/347178633%3Fsecret_token%3Ds-oeE30&amp;color=51596b&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
                  frameborder="0"></iframe>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      showCinematic: true,
      showCommercial: false
    };
  },
  methods: {
    toggleCinematic() {
      this.showCinematic = true;
      this.showCommercial = false;
    },
    toggleCommercial() {
      this.showCinematic = false;
      this.showCommercial = true;
    }
  }
};
</script>


<style scoped>
h3 {
  cursor: pointer;
}
iframe {
  width: 100%;
  height: 550px;
  margin-bottom: 50px;
  margin-top: -10px;
}

@media (max-width: 568px) {
  iframe {
    height: 300px;
  }
}

.lightFont {
  color: #d0d0d0;
  letter-spacing: 3px;
  opacity: 0.7;
}

.selected {
  color: #5d80ba;
}

.music-anim-enter-active {
  animation: coming 900ms;
  opacity: 0;
  animation-delay: 150ms;
}
.music-anim-leave-active {
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
