<template>
    <body>
        <div class="image-container">
            <img :src="getSong.content[0].thumbnails[1].url" alt="song picture">
        </div>
        <div class="hero-text-container">
            <h3 class="hero-text">{{getSong.content[0].name}}</h3>
            <h3 class="hero-text">{{getSong.content[0].artist.name}}</h3>
        </div>
        <div class="button-container">
            <button v-on:click="playSong()"><i class="fas fa-play"></i><p>PLAY</p></button>
            <button v-on:click="addToQueue()"><i class="fas fa-plus"><p>ADD TO QUEUE</p></i></button>
            <button v-on:click="copyShareLink()"><i class="fas fa-link"><p>SHARE</p></i></button>
        </div>
        <div id="shareLinkResult"></div>
    </body>
</template>

<script>
export default {
    props: ['videoId'],
    created(){
        this.fetchSong();
    },
    computed: {
        getSong(){
            return this.$store.state.songResult;
        }
    },
    methods: {
        fetchSong(){
            this.$store.dispatch('getSingleSongResult', this.videoId)
        },
        playSong(){
            if(this.$store.state.loadedSong){
                this.$store.dispatch('unloadAndSendToPrevious')
            }
            this.$store.dispatch('setLoadedSong', this.getSong.content[0]);
            window.player.loadVideoById(this.videoId);
            window.player.playVideo();
        },
        addToQueue(){
            this.$store.dispatch('addToQueue', this.getSong.content[0]);
            window.alert(this.getSong.content[0].name + " added to queue!");
        },
        copyShareLink(){
            let url = window.location.origin + this.$route.path
            let textField = document.getElementById('shareLinkResult');
            textField.innerHTML = url;

            if(textField.style.display === 'none'){
                textField.style.display = 'inline-block';
            }
            else{
                textField.style.display = 'none';
            }
        }
    }
}
</script>
<style scoped>
    body{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-content: center;
        justify-content: center;
    }
    body>.image-container{
        display: flex;
        justify-content: center;
        padding-bottom: 3rem;
    }
    body>.image-container>img{
        width: 120px;
        height: 120px;
    }
    body>.hero-text-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    body>.hero-text-container>.hero-text{
        font-size: 1.2rem;
        padding: 0.1rem;
    }
    body>.button-container{
        display: flex;
        justify-content: center;
        padding-top: 3rem;
    }
    body>.button-container>button{
        width: 7rem;
        height: 3rem;
        background-color: #FF4C29;
        color: white;
        outline: none;
        border: none;
        margin: 0 .5rem;
    }
    body>.button-container>button:hover{
        background-color: #f5907b;
    }
    #shareLinkResult{
        width: 95%;
        margin: 1rem auto;
        display: none;
        text-align: center;
    }
</style>
