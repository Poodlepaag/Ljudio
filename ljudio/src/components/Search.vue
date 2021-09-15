<template>
    <div>
        <form name="search" class="search-form" v-on:submit.prevent="onSubmit">
            <input type="text" name="searchstring" class="search-field" placeholder="Search Ljudio library" autocomplete="off">
            <button class="ljudio-btn-orange" id="form-button" v-on:click="createSearch">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        createSearch(){
            this.$router.push({ path: '/library', params: {}})
        }
    }
}


</script>