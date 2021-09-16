<template>
    <div class="library-wrapper">
        <Search/>
        <div class="header-border">
            <h2>ARTISTS</h2>
        </div>
        <ul>
            <li v-for="(artist, index) in getUpdatedArtistResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" href="#">
                    {{ artist.name }}
                </a>
            </li>
        </ul>
        <div class="header-border">
            <h2>SONGS</h2>
        </div>
        <ul>
            <li v-for="(song, index) in getUpdatedSongResults" v-bind:key="index" class="results-item">
                <a class="results-item-link" v-on:click.prevent="click" href="#">
                    <p>{{ song.name }}</p>
                    <p class="discrete">{{ song.artist.name}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import Search from '../components/Search.vue'

export default {
    name: 'Library',
    components: {
        Search,
    },
    data() {
        return {
            results: [],
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
        }
    },
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
.results-item{
    width: 100%;
    height: 50px;
    background-color: rgba(51,71,86,0.1);
    list-style: none;
    margin: .5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
.results-item:hover{
    background-color:rgba(51,71,86,0.3)
}
.results-item-link{
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.results-item-link:hover{
    color: white;
}
.discrete{
    color: #2C394B;
    padding-top: 0.5rem;
    font-size: 0.9rem;
}
.library-wrapper{
    height: 100%;
}

</style>