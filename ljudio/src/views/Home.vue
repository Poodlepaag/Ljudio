<template>
  <div class="home-wrapper">
      <ul class="home-list hero">
        <li class="home-list-item first-row"><span>Your music</span></li>
        <li class="home-list-item second-row"><span>Your sound</span></li>
        <li class="home-list-item"><span>Your</span><span class="hero orange"> Ljudio</span></li>
      </ul>
    <div class="search-wrapper">
      <Search/> 
    </div>
  </div>
</template>

<script>

import Search from '../components/Search.vue';

export default {
  name: 'Home',
  components: {
    Search,
  }
}
</script>

<style scoped>
.home-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-list{
  list-style: none;
  line-height: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.first-row{
  opacity: 0.1;
  font-size: 4rem;
}
.second-row{
  opacity: 0.2;
  font-size: 4.4rem;
}
</style>
