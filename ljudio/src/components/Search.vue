<template>
    <div>
        <form name="search" v-on:keyup.enter="createSearch" class="search-form" v-on:submit.prevent="onSubmit">
            <input type="text" name="searchstring" class="search-field" placeholder="Search Ljudio library" id="search-field" autocomplete="off">
            <button class="ljudio-btn-orange" id="form-button" v-on:click="createSearch">Search</button>
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
            this.$router.push('/library');
        }
    }
}
</script>

<style>
.search-field{
    display: flex;
    width: 30%;
    min-width: 200px;
    max-width: 800px;
    height: 30px;
    border: 0.1em rgba(255, 76, 41, 0.6) solid;
    border-radius: 25px;
    outline: none;
    font-size: 1.5rem;
    font-weight: lighter;
    text-align: center;
    background-color: rgba(255,76,41,0.05);
    color: white;
    padding: 5px;
    margin: 30px auto;
    transition: .5s;
}

.search-field:focus{
    width: 60%;
    transition: .3s;
}

::placeholder{
    color: rgba(255,255,255,0.1);
    font-size: 1.3rem;
}
</style>