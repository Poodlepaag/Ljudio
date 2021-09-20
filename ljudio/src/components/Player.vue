<template>
  <div class="player-wrapper">
    <div class="song-information">
      <p class="song-name">{{ loadedSong.name }}</p>
      <p class="artist-name">{{ loadedSong.artist.name }}</p>
    </div>
    <div class="player-controller">
      <div class="buttons-wrapper">
        <button class="btn-small" id="prevButton" v-on:click="previous"><i class="fas fa-backward white"></i></button>
        <button class="btn-normal" v-on:click="play"><i class="fas fa-play white" id="playOrPause"></i></button>
        <button class="btn-small" id="nextButton" v-on:click="next"><i class="fas fa-forward white"></i></button>
      </div>
    </div>
    <div class="extra-controller">
      <input type="range" min="0" max="100" value="20" class="volume-slider" v-on:change="volumeControl" id="myVolume">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 0,
    }
  },
  methods:{
    play(){
      if(window.player.getPlayerState() === 1){
        window.player.pauseVideo();
        let icon = document.getElementById('playOrPause')
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play')
        
      }
      else{
        window.player.playVideo();
        let icon = document.getElementById('playOrPause')
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause')
      }
    },
    volumeControl(){
      window.player.setVolume(document.getElementById('myVolume').value);
    },
    next(){
      if(this.songQueue.length > 0){
        this.$store.dispatch('moveFromLoadedToPrevious');
        this.$store.dispatch('nextSong');
        window.player.loadVideoById(this.loadedSong);
        window.player.playVideo();
      }
    },
    previous(){
      if(this.previousSongs.length > 0){
        this.$store.dispatch('moveFromPreviousToLoaded');
        window.player.loadVideoById(this.$store.state.loadedSong);
        window.player.playVideo();
      }
    },
  },
  computed: {
    loadedSong(){
      return this.$store.state.loadedSong;
    },
    songQueue(){
      return this.$store.state.songQueue;
    },
    previousSongs(){
      return this.$store.state.previousSongs;
    }
  },
}


</script>

<style scoped>
.player-wrapper{
    background-color: #02111d;
    height: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25% 50% 25%;
}

.song-information{
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.song-information>.song-name{
  font-size: 1.2rem;
}
.song-information>.arist-name{
  font-size: 0.8rem;
}

.player-controller{
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.extra-controller{
  grid-row: 1/2;
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-normal{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #FF4C29;
    margin: 0 .5rem 0 .5rem;
}
.btn-normal:hover{
  background-color: #f5907b;

}
.slidewrapper{
  width: 80%;
}
.slider{
  width: 100%;
}

.btn-small{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: #FF4C29;
}

.btn-small:hover{
  background-color: #f5907b;
}

.white{
  color: white;
}
</style>