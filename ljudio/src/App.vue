<template>
  <div class="app-wrapper">
    <header>
      <Header/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
}
header{
  flex-grow: .5;
  display: flex;
  align-items: center;
}
main{
  flex-grow: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  height: 100%;
}
footer{
  flex-grow: 4;
}
</style>
