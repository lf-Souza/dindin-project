<template>
  <div class="table">
      <b-row>
          <b-card
                v-for="cursos in listCursos"
                :key="cursos.index"
                :title="cursos.name"
                class="card--style"
            >
          </b-card>
      </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Cursos',
    computed: {
        ...mapGetters("cursos",['listCursos'])
    }
}
</script>

<style scoped>
.card--style {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 812px;
    height: 44px;
    margin: -1px;

    background: #FFFFFF;
    border: 1px solid #989898;
    box-sizing: border-box;
   
}

.table {
    margin: 441px 95px;
}

</style>