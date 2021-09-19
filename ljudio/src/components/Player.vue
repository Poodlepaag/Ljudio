<template>
  <div class="player-wrapper">
    <div class="song-information">
      <p class="song-name">{{ loadedSong.name }}</p>
      <p class="artist-name">{{ loadedSong.artist.name }}</p>
    </div>
    <div class="player-controller">
      <div class="slidewrapper">
        <input type="range" min="0" max="100" value="0" class="slider" id="myRange">
      </div>
      <div class="buttons-wrapper">
        <button class="btn-small"><i class="fas fa-backward white"></i></button>
        <button class="btn-normal" v-on:click="play"><i class="fas fa-play white"></i></button>
        <button class="btn-small"><i class="fas fa-forward white"></i></button>
      </div>
    </div>
    <div class="extra-controller">
      <input type="range" min="0" max="100" value="20" class="volume-slider" v-on:change="volumeControl" id="myVolume">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    play(){
      window.player.loadVideoById(this.$store.state.loadedSong.videoId);
      window.player.playVideo();
    },
    pause(){
      window.player.pauseVideo()
    },
    volumeControl(){
      window.player.volume = document.getElementById('myVolume').value;
      console.log(window.player.volume);
    }
  },
  computed: {
    loadedSong(){
      return this.$store.state.loadedSong;
    },
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