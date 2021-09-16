<template>
    <div class="header-wrapper">
        <router-link to="/">Home</router-link>
        <router-link to="/library">Library</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    a{
        color: white;
        text-decoration: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.10rem;
        margin-right: 2rem;
    }
    a:hover{
        color: #FF4C29;
    }
</style>