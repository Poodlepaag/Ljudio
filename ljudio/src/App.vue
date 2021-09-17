<template>
  <div class="app-wrapper">
    <header class="app-header">
      <Header id="header-component"/>
    </header>
    <main class="app-main">
      <router-view/>
    </main>
    <footer class="app-footer">
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default {
  components: { 
    Header,
    Footer,
  },
}
</script>

<style scoped>
.app-wrapper{
  min-height: 97vh;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: white;
}
.app-header{
  width: 60%;
  margin: auto;
  align-items: center;
}
.app-main{
  width: 60%;
  margin: auto;
  flex-grow: 1;
  justify-content: center;
  overflow: scroll;
}
.app-footer{
  width: 100%;
  height: 100px;
}
</style>
