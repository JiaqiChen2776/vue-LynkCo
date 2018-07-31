<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/Home/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  mounted() {
    console.log(document.documentElement.clientHeight);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
</style>
