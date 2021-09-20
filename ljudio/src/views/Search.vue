<template>
    <div class="search-wrapper">
        <Searchbar/>
        <div class="header-border">
            <h2 v-on:click="toggleSongs()">SONGS</h2>
        </div>
        <ul id="listOfSongs">
            <li v-for="(song, index) in getUpdatedSongResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" v-on:dblclick="setLoadedSong(song)" href="#">
                    <div class="results-song-information">
                        <span class="main-text">{{ song.name }}</span>
                        <span class="sub-text">{{ song.artist.name}}</span>
                    </div>
                    <div class="results-song-alternatives">
                        <i class="fas fa-plus" id="addToQueueIcon" v-on:click="addToQueue(song)"></i>
                    </div>
                </a>
            </li>
        </ul>
        <div class="header-border">
            <h2 v-on:click="toggleArtists()">ARTISTS</h2>
        </div>
        <ul id="listOfArtists">
            <li v-for="(artist, index) in getUpdatedArtistResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" href="#">
                    <span class="main-text">{{ artist.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import Searchbar from '../components/Searchbar.vue'

export default {
    name: 'Search',
    components: {
        Searchbar,
    },
    computed: {
        getUpdatedArtistResults(){
            return this.$store.state.artistResults.content;
        },
        getUpdatedSongResults(){
            return this.$store.state.songResults.content;
        },
        getUpdatedSearchString(){
            return this.$store.state.searchString;
        },
    },
    methods:{
        // Player related (Not directly)
        setLoadedSong(song){
            if(this.$store.state.loadedSong){
                this.$store.dispatch('unloadAndSendToPrevious')
            }
            this.$store.dispatch('setLoadedSong', song);
            window.player.loadVideoById(song.videoId);
            window.player.playVideo();
        },
        addToQueue(song){
            let nextButton = document.getElementById('nextButton');
            nextButton.disabled = false;
            this.$store.dispatch('addToQueue', song);
            console.log(this.$store.state.songQueue);
        },

        // Visual settings only
        toggleSongs(){
            var listOfSongs = document.getElementById('listOfSongs');

            if(listOfSongs.style.display === "none"){
                listOfSongs.style.display = "block";
            }
            else{
                listOfSongs.style.display = "none";
            }
        },
        toggleArtists(){
            var listOfArtists = document.getElementById('listOfArtists');
            
            if(listOfArtists.style.display === "none"){
                listOfArtists.style.display = "block";
            }
            else{
                listOfArtists.style.display = "none";
            }
        },
    }
}

</script>

<style scoped>
#addToQueueIcon{
    font-size: 1.5rem;
}
h2{
    color: #FF4C29;
}
.header-border{
    border-bottom: 1px #334756 solid;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
}
.search-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.results-item{
    padding: 0.3rem;
    margin: 0.5rem 0;
    height: 3.5rem;
    background-color: rgba(51, 71, 86, 0.1);
    display: flex;
}
.results-item:hover{
    background-color: rgba(51, 71, 86, 0.3);
}
.results-item>.results-item-link{
    text-decoration: none;
    color: white;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    margin: auto;
    height: 100%;
    width: 100%;
    cursor: default;
}
.results-item>.results-item-link>.results-song-information>.main-text{
    font-size: 1.2rem;
    margin-left: 0.1rem;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}
.results-item>.results-item-link>.results-song-information>.sub-text{
    font-size: 0.8rem;
    margin-left: 0.1rem;
    color: gray;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow:hidden !important;
    text-overflow: ellipsis;
}
.results-song-information{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: right;
    padding-left: .5rem;
}
.results-song-alternatives{
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: .5rem;
}

</style>