<template>
  <div id='app'>
    
    <router-view/>
  </div>
</template>

<script>
//import Header from '../src/components/Header'
import vHome from '../src/components/Home'
import Interest from '../src/components/Interest'
import Post from '../src/components/Post'
import Profile from '../src/components/Profile'


export default {
  name: 'app',
  components: {
    vHome
  }
}


</script>

<style>

</style>
