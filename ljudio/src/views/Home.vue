<template>
  <div class="center">
    <div class="top-menu">

    </div>
    <ul class="standard-list hero">
      <li class="first-row"><span>Your music</span></li>
      <li class="second-row"><span>Your sound</span></li>
      <li class="third-row"><span>Your</span><span class="hero orange"> Ljudio</span></li>
    </ul>
    <div class="bottom-menu">
      
    </div>
    <Search/>
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
