<template>
    <div class="header-wrapper">
        <router-link to="/">Home</router-link>
        <router-link to="/search">Search</router-link>
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
        font-size: 0.8rem;
        margin-right: 1.5rem;
    }
    a:hover{
        color: #FF4C29;
    }

    @media screen and (max-width: 1024px){
        .header-wrapper{
            display: flex;
            justify-content: center;
        }
    }
</style>