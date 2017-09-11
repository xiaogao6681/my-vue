<template>
  <div id="app">
    <router-view></router-view>
    <Tabber></Tabber>
  </div>
</template>

<script>
import Tabber from './components/tabber'
export default {
  name: 'app',
  components:{
    Tabber
  },
  created:function(){
    this.$router.push('/home');
  }
}
</script>

<style>
 *{padding: 0;margin: 0;}
 a{text-decoration: none}
 html{font-size: 100px}
 body{font-size: 20px}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
 .wrapWrap{
   z-index:10;
 }
.searchWrap+.tabberWrap{
  display: none;
}
</style>
