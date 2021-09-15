<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'

export default {
  components: { Header },
}
</script>
