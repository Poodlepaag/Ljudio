<template>
    <div>
        <form name="searchform" v-on:keyup="createSearch" class="search-form" v-on:submit.prevent="onSubmit">
            <input type="text" name="searchstring" class="search-field" placeholder="Search Ljudio library" id="search-field" autocomplete="off">
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        createSearch(){
            let searchString = document.getElementById('search-field');
            this.$store.dispatch('getArtistResults', searchString.value)
            this.$store.dispatch('getSongResults', searchString.value)
            this.$router.push('/search');
        }
    }
}
</script>

<style>
.search-field{
    display: flex;
    width: 80%;
    height: 20px;
    border: 0.1em rgba(255, 76, 41, 0.6) solid;
    border-radius: 25px;
    outline: none;
    font-size: 1.3rem;
    font-weight: lighter;
    text-align: center;
    background-color: rgba(255,76,41,0.05);
    color: white;
    padding: 5px;
    margin: 30px auto;
    transition: .5s;
}

::placeholder{
    color: rgba(255,255,255,0.1);
    font-size: 1.3rem;
}

@media screen and (max-width: 600px) {
    .search-field{
        width: 80%;
    }
}
</style>