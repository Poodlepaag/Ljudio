<template>
    <div class="search-wrapper">
        <Searchbar/>
        <div class="header-border">
            <h2 v-on:click="toggleDisplay(className)" class="listOfSongs">SONGS</h2>
        </div>
        <ul>
            <li v-for="(song, index) in getUpdatedSongResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" v-on:dblclick="setLoadedSong(song)" href="#">
                    <p class="main-text">{{ song.name }}</p>
                    <p class="sub-text">{{ song.artist.name}}</p>
                </a>
            </li>
        </ul>
        <div class="header-border">
            <h2>ARTISTS</h2>
        </div>
        <ul>
            <li v-for="(artist, index) in getUpdatedArtistResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" href="#">
                    <p class="main-text">{{ artist.name }}</p>
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
    data() {
        return {
            results: [],
            numberOfSongs: 0,
            numberOfArtists: 0,
        }
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
        setLoadedSong(song){
            window.player.loadVideoById(song.videoId);
            window.player.playVideo();
            this.$store.state.loadedSong = song;
        },
    }
}
</script>

<style scoped>
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
}
.results-item:hover{
    background-color: rgba(51, 71, 86, 0.3);
}
.results-item>.results-item-link{
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    cursor:default;
}
.results-item>.results-item-link>.main-text{
    font-size: 1.2rem;
    margin-left: 0.1rem;
}
.results-item>.results-item-link>.sub-text{
    font-size: 0.8rem;
    margin-left: 0.1rem;
    color: gray;
}

</style>