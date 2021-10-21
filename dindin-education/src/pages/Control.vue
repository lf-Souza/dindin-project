<template>
  <div>
    <div class="painel">
      <h1 class="title-painel"> Painel Administrativo </h1>
      <h2 class="subtitle-painel"> Educação financeira é tudo de bom </h2>
      <div class="table-title">
        <h3 class="title1">Curso</h3>
        <b-button class="but-cad" squared @click="$router.push('/register')" >
          <span class="cad">cadastrar</span>
        </b-button>
        <h3 class="title2">Ações</h3>
      </div>
      <CardCursos />
    </div>
    <div class="rodape">
      <b-img class="logo-rodape" src="https://i.ibb.co/hfst53K/dindin-logo-white.png" fluid alt="Responsive image"></b-img>
      <span class="dindin-rodape">dindin</span>
      <span class="slogan-rodape">educação financeira</span>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import CardCursos from '../components/Control-course.vue'

import Baseboard from '../components/Baseboard.vue'

export default {
  name: 'Cursos',
  components: {CardCursos, Baseboard},
  mounted(){
    this.getCursos().then(()=>{
    })
  },
  methods:{
    ...mapActions('cursos',['getCursos'])
  },
  computed:{
    ...mapGetters('cursos',['listCursos'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

.dindin-logo {
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    width: 98.57px;
    height: 101.43px;
    left: 128px;
    bottom: 52.57px;
}

.dindin-logo2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 198px;
    height: 58px;
    left: 242px;
    top: 59px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 66px;
    line-height: 76px;

    color: #FFFFFF;
}
.dindin-logo3 {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 168px;
    height: 22px;
    left: 249px;
    top: 129px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 22px;

    color: #FFFFFF;
}

.title-painel {
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 733px;
  height: 69px;
  left: 82px;
  top: 198px;

  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 69px;
  /* identical to box height */

  text-transform: capitalize;

  color: #FF4081;
}

.subtitle-painel {
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 23px;
  left: 82px;
  top: 267px;

  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */
  color: #555555;
}

.table-title {
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 812px;
  height: 44px;
  left: 82px;
  top: 397px;

  background: #EBEBEB;
  border: 1px solid #989898;
  box-sizing: border-box;
}

.title1 {
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 63px;
  height: 28px;
  left: 24px;
  top: 8px;

  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
}

.title2 {
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 65px;
  height: 28px;
  left: 557px;
  top: 8px;

  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
}

.rodape {
    width: 100%;
    height: 207px;
    left: 0%;
    bottom: 0px;

    background: #2E948A;
}

.logo-rodape {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 98.57px;
  height: 101.43px;

  margin: 53px 128px;
}

.dindin-rodape {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 198px;
    height: 58px;
    margin: 59px 242px;

    font-family: 'Ubuntu', sans-serif;
    font-style: bold;
    font-weight: 500;
    font-size: 66px;
    line-height: 76px;

    color: #FFFFFF;
}

.slogan-rodape {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 168px;
    height: 22px;
    margin: 129px 249px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 22px;

    color: #FFFFFF;
}

.but-cad {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 110px;
    height: 22px;
    left: 100px;
    top: 11px;

    background: #464649;
    border: 0px
}

.cad {
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

</style>