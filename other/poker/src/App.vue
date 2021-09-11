<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PokerItem :order="0" />
    <PokerItem :order="1" />
    <PokerItem :order="2" />
    <PokerItem :order="3" />
  </div>
</template>

<script>
import PokerItem from '@/components/PokerItem'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    PokerItem
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
