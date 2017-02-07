<template>
    <div id="app">
        <img src='./assets/logo.png'>
        <home></home>
    </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app img{
    margin: auto;
    display: block;
    height: 15%;
    width: 15%;
}
</style>
