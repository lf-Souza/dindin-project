<!-- Componente: Consulta na API os cursos cadastrados e os lista -->

<template>
  <div class="table">
      <b-row>
          <b-card
                v-for="cursos in listCursos"
                :key="cursos.codigoCurso"
                class="card--style"
            >
                <span class="table-name">
                    {{ cursos.nomeCurso }}
                </span>
                <b-button class="but-edit" squared @click="abrirDetalhescurso(cursos.codigoCurso)" >
                    <span class="but-name1">editar</span>
                </b-button>
                <b-button class="but-delete" squared @click="$router.push('/error')">
                    <span class="but-name2">excluir</span>
                </b-button>
            </b-card>
      </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Cursos',
    computed: {
        ...mapGetters("cursos",['listCursos'])
    },
    methods: {
        abrirDetalhescurso(id) {
            this.$router.push(`/course/${id}`);
        },
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.card--style {
    display: flex;
    flex-direction: row;
    width: 812px;
    height: 44px;
    margin: -1px;

    background: #FFFFFF;
    border: 1px solid #989898;
    box-sizing: border-box;
   
}

.table-name {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 400px;
    height: 21px;
    left: 24px;
    top: 12px;

    font-family:'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    /* identical to box height */

    text-transform: capitalize;

    color: #000000;
}

.table {
    margin: 441px 95px;
}

.but-edit {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 87px;
    height: 22px;
    left: 556px;
    top: 11px;

    background: #F8C23A;
    border: 0px
}

.but-name1 {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 41px;
    height: 17px;
    left: 22px;
    top: 2px;

    font-family:'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;

    color: #FFFFFF;
}

.but-delete {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 87px;
    height: 22px;
    left: 655px;
    top: 11px;

    background: #F8513A;
    border: 0px
}

.but-name2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 45px;
    height: 17px;
    left: 22px;
    top: 2px;

    font-family:'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;

    color: #FFFFFF;
}

</style>