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
  position: relative;
  margin: auto;
  overflow-x: hidden;
}
.app-header{
  width: 60%;
  top: 0;
  margin: auto;
  align-items: center;
  padding: .5rem;
}
.app-main{
  width: 60%;
  margin: auto;
  flex-grow: 1;
  justify-content: center;
  overflow: scroll;
  padding-bottom: 5rem;
  bottom: 0;
}
.app-footer{
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
}

@media screen and (max-width: 1024px) {
  .app-header{
    width: 100%;
  }
  .app-main{
    width: 100%;
    font-size: 1.2rem;
    padding-bottom: 5rem;
  }
  .app-footer{
    height: 5rem;
  }
}

@media screen and (max-width: 600px){
  .app-main{
    padding-bottom: 10rem;
  }
  .app-footer{
    height: 10rem;
  }
}
</style>
