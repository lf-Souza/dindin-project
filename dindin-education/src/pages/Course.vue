<template>
  <div class="cursos">
    <h1>Cursos </h1>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  mounted(){
    this.getCursos().then(()=>{
      this.getAulas()
    })
  },
  methods:{
    ...mapActions('cursos',['getCursos']),
    ...mapActions('aulas',['getAulas'])
  },
  computed:{
    ...mapGetters('cursos',['listCursos']),
    ...mapGetters('aulas',['listAulas'])
  }
}
</script>

<style>


</style>