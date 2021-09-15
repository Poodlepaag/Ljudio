<template>
  <div class="home-wrapper">
    <div class="top-spacer"></div>
    <div class="center">
      <div class="hero-wrapper">
        <ul class="standard-list hero">
          <li class="first-row"><span>Your music</span></li>
          <li class="second-row"><span>Your sound</span></li>
          <li class="third-row"><span>Your</span><span class="hero orange"> Ljudio</span></li>
        </ul>
      </div>
      <div class="search-wrapper">
        <Search/> 
      </div>
    </div>
    <div class="bottom-spacer"></div>
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
.top-spacer{
  flex-grow: 2;
}
.center{
  flex-grow: 6;
}
.bottom-spacer{
  flex-grow: 2;
}
</style>
