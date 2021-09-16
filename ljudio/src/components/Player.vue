<template>
  <div class="player-wrapper">
    <button class="btn">PRE</button>
    <button class="btn">PLAY</button>
    <button class="btn">NEXT</button>
  </div>
</template>

<script>
export default {
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    }
  }
}
</script>

<style scoped>
.player-wrapper{
    background-color: #02111d;
    height: 100%;
}

.btn{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
</style>