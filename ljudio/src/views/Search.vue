<template>
    <div class="search-wrapper">
        <Searchbar/>
        <div class="header-border" v-on:click="toggleSongs()">
            <h2>SONGS</h2><h2 v-if="getUpdatedSongResults">({{getUpdatedSongResults.length}})</h2><i class="fas fa-chevron-down" id="songChevronIcon"></i>
        </div>
        <ul id="listOfSongs">
            <li v-for="(song, index) in getUpdatedSongResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" v-on:dblclick="setLoadedSong(song)" href="#">
                    <div class="results-song-information">
                        <span class="main-text"><router-link class="router-link-main-text" v-if="song.videoId" :to="{ name: 'Song', params: { videoId: song.videoId }}">{{ song.name }}</router-link></span>
                        <span class="sub-text"><router-link class="router-link-sub-text" v-if="song.artist.browseId" :to="{ name: 'Artist', params: { browseId: song.artist.browseId }}">{{ song.artist.name}}</router-link></span>
                    </div>
                    <div class="results-song-alternatives">
                        <button v-on:click="setLoadedSong(song)" class="playButton"><i class="fas fa-play white"></i></button>
                        <button v-on:click="addToQueue(song)" class="addToQueueButton"><p>Add to queue</p><i class="fas fa-plus mouseover" id="addToQueueIcon"></i></button>
                    </div>
                </a>
            </li>
        </ul>
        <div class="header-border" v-on:click="toggleArtists()">
            <h2>ARTISTS</h2><h2 v-if="getUpdatedArtistResults">({{getUpdatedArtistResults.length}})</h2><i class="fas fa-chevron-down" id="artistChevronIcon"></i>
        </div>
        <ul id="listOfArtists">
            <li v-for="(artist, index) in getUpdatedArtistResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" href="#">
                    <span class="main-text"><router-link class="router-link-main-text" v-if="artist.browseId" :to="{ name: 'Artist', params: { browseId: artist.browseId }}">{{ artist.name }}</router-link></span>
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
    data(){
        return{
            isLoaded: false,
        }
    },
    computed: {
        getUpdatedArtistResults(){
            this.isLoaded = true;
            return this.$store.state.artistResults.content;
        },
        getUpdatedSongResults(){
            this.isLoaded = true;
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
            window.alert(song.name + " added to queue!");
        },
        createArtistSearch(){
            this.$store.dispatch('getSingleArtistResult')
        },

        // Visual settings only
        toggleSongs(){
            let listOfSongs = document.getElementById('listOfSongs');
            let chevronIcon = document.getElementById('songChevronIcon');

            if(listOfSongs.style.display === "none"){
                listOfSongs.style.display = "block";
                chevronIcon.classList.remove('fa-chevron-up');
                chevronIcon.classList.add('fa-chevron-down');
            }
            else{
                listOfSongs.style.display = "none";
                chevronIcon.classList.remove('fa-chevron-down');
                chevronIcon.classList.add('fa-chevron-up');
            }
        },
        toggleArtists(){
            var listOfArtists = document.getElementById('listOfArtists');
            let chevronIcon = document.getElementById('artistChevronIcon');
            
            if(listOfArtists.style.display === "none"){
                listOfArtists.style.display = "block";
                chevronIcon.classList.remove('fa-chevron-up');
                chevronIcon.classList.add('fa-chevron-down');
            }
            else{
                listOfArtists.style.display = "none";
                chevronIcon.classList.remove('fa-chevron-down');
                chevronIcon.classList.add('fa-chevron-up');
            }
        },
    }
}

</script>

<style scoped>
button{
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
button:hover{
    color: #FF4C29;
}
.playButton{
    display: none;
    margin-right: 1rem;
    font-size: 1.5rem;
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
#listOfSongs{
    display: block;
}
#listOfArtists{
    display: block;
}
#addToQueueIcon{
    font-size: 1.5rem;
}
h2{
    color: #FF4C29;
}
.header-border{
    border-bottom: 1px #334756 solid;
    padding: .5rem .5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-border>span{
    display: flex;
}
.header-border:hover{
    background-color: rgba(255,255,255,0.01);
    cursor: pointer;
}
.header-border>i{
    margin-left: 1rem;
    font-size: 1.2rem;
    color: #FF4C29;
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
    color: white;
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
p{
    display: flex;
    justify-content: center;
    padding-right: 0.8rem;
}

@media screen and (max-width: 1024px){
    p{
        display: none
    }
    .playButton{
        display: inline-block;
    }
}
</style>