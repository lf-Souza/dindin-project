<template>
  <div id="app">
    <Header />
    <Baseboard />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Baseboard from './components/Baseboard.vue'

export default {
  components: {Header , Baseboard}
}
</script>
