<template>
  <div class="cursos">
        <div
              v-for="cursos in listDetalhesCurso"
              :key="cursos.codigoCurso"
              class="card--style"
          >
            <span class="curso-nome">{{ cursos.nomeCurso }}</span>
            <span class="curso-descricao">{{ cursos.descricaoCurso }}</span>           
        </div>
        <img class="curso-capa" src="https://i.ibb.co/GtzzcQc/image2.png" alt="capa-curso">
        <div class="aulas-list">
          <img class="video1" alt="video" src="../assets/video.png">
          <span class="title-aula1">Aula 1</span>
          <span class="aula1-descricao">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
          <img class="line" alt="video" src="../assets/image1.png">
          
          <img class="video2" alt="video" src="../assets/video.png">
          <span class="title-aula2">Aula 2</span>
          <span class="aula2-descricao">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
          <img class="line2" alt="video" src="../assets/image1.png">
          
          <img class="video3" alt="video" src="../assets/video.png">
          <span class="title-aula3">Aula 3</span>
          <span class="aula3-descricao">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
.card--style{
  margin: 130px 0px;
  background: #FFFFFF;
  border: -1px solid #989898;
  box-sizing: border-box;
}

.curso-nome {
  position: absolute;
  width: 512px;
  height: 126px;
  margin: 94px 202px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 63px;

  color: #FF4081;
}

.curso-descricao {
  position: absolute;
  width: 461px;
  height: 186px;
  margin: 242px 202px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}

.curso-capa {
  position: absolute;
  width: 380px;
  height: 381px;
  margin: 81px 751px;
}

.aulas-list {
  position: absolute;
  width: 100%;
  height: 1235px;
  left: 0px;
  top: 659px;

  background: #F7F7F7;
}

.video1 {
  position: absolute;
  width: 462px;
  height: 261px;
  margin: 75px 213px;

}

.title-aula1 {
  position: absolute;
  width: 512px;
  height: 40px;
  margin: 75px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  color: #FF4081;
}

.aula1-descricao {
  position: absolute;
  width: 501px;
  height: 195px;
  margin: 141px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}

.line {
  position: absolute;
  width: 1244px;
  height: 3px;
  margin: 409px 25px;
}

.video2 {
  position: absolute;
  width: 462px;
  height: 261px;
  margin: 487px 213px;

}

.title-aula2 {
  position: absolute;
  width: 512px;
  height: 40px;
  margin: 487px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  color: #FF4081;
}

.aula2-descricao {
  position: absolute;
  width: 501px;
  height: 195px;
  margin: 553px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}

.line2 {
  position: absolute;
  width: 1244px;
  height: 3px;
  margin: 821px 25px;
}

.video3 {
  position: absolute;
  width: 462px;
  height: 261px;
  margin: 899px 213px;

}

.title-aula3 {
  position: absolute;
  width: 512px;
  height: 40px;
  margin: 889px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  color: #FF4081;
}

.aula3-descricao {
  position: absolute;
  width: 501px;
  height: 195px;
  margin: 965px 751px;

  font-family:'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}
</style>