<template>
  <div class="player-wrapper">
    <div class="song-information" v-if="isLoaded == true">
      <span class="statusOfPlayer" id="statusOfPlayer">Now playing</span>
      <span class="song-name"><router-link class="router-link-main-text" v-if="loadedSong.name" :to="{ name: 'Song', params: { videoId: loadedSong.videoId }}">{{ loadedSong.name }}</router-link></span>
      <span class="artist-name"><router-link class="router-link-sub-text" v-if="loadedSong.artist.browseId" :to="{ name: 'Artist', params: { browseId: loadedSong.artist.browseId }}">{{ loadedSong.artist.name }}</router-link></span>
    </div>
    <div class="player-controller">
      <div class="buttons-wrapper">
        <button class="btn-small" id="prevButton" v-on:click="previous"><i class="fas fa-backward white"></i></button>
        <button class="btn-normal" v-on:click="playAndPause"><i class="fas fa-play white" id="playOrPause"></i></button>
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
  data(){
    return{
      isLoaded: false,
    }
  },
  methods:{
    playAndPause(){
      this.isLoaded = true;
      if(window.player.getPlayerState() === 1){
        window.player.pauseVideo();
        let icon = document.getElementById('playOrPause');
        let statusText = document.getElementById('statusOfPlayer');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        statusText.innerHTML = "Paused";
      }
      else{
        window.player.playVideo();
        let icon = document.getElementById('playOrPause')
        let statusText = document.getElementById('statusOfPlayer');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        statusText.innerHTML = "Now playing";
      }
    },
    volumeControl(){
      window.player.setVolume(document.getElementById('myVolume').value);
    },
    next(){
      this.isLoaded = true;
      if(this.queue.length > 0){
        this.$store.dispatch('unloadAndSendToPrevious');
        this.$store.dispatch('loadByFetchFromQueue');
        window.player.loadVideoById(this.$store.state.loadedSong.videoId);
        window.player.playVideo();
        this.playAndPause();
      }
    },
    previous(){
      this.isLoaded = true;
      if(this.previousSongs.length > 0){
        this.$store.dispatch('unloadAndSendToQueue');
        this.$store.dispatch('loadByFetchFromPrevious');
        window.player.loadVideoById(this.$store.state.loadedSong.videoId);
        window.player.playVideo();
        this.playAndPause();
        if(this.previousSongs.length === 0){
          this.isLoaded = false;
        }
      }
    },
  },
  computed: {
    loadedSong(){
      this.isLoaded = true;
      return this.$store.state.loadedSong;
    },
    queue(){
      return this.$store.state.queue;
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
  padding-left: 1rem;
}

.song-information>.statusOfPlayer{
  color: #FF4C29;
}
.song-information>.song-name{
  font-size: 1.2rem;
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden !important;
  white-space: nowrap;
}
.song-information>.artist-name{
  font-size: 0.8rem;
  color: gray;
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden !important;
  white-space: nowrap;
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
.router-link-main-text{
    text-decoration: none;
    color: white;
}
.router-link-main-text:hover{
    text-decoration: underline;
}
.router-link-sub-text{
    text-decoration: none;
    color: gray;
}
.router-link-sub-text:hover{
    text-decoration: underline;
}
</style>