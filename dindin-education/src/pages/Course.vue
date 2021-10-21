<template>
  <div class="cursos">
        <div
              v-for="cursos in listDetalhesCurso"
              :key="cursos.codigoCurso"
              class="card--style"
          >
              <span class="table-name">{{ cursos.nomeCurso }}</span>
        </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Cursos',
  mounted(){
    this.getCursoById(this.$route.params.id)
  },
  methods:{
    ...mapActions('cursos',['getCursoById']),
  },
  computed:{
    ...mapGetters('cursos',['listDetalhesCurso']),
  }
}
</script>

<style>

.card--style{
  margin: 130px 0px;
  background: #FFFFFF;
  border: -1px solid #989898;
  box-sizing: border-box;
}
</style>