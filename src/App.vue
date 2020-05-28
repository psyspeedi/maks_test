<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Main from './views/Main'
  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
