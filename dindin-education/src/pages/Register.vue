<template>
  <div class="novo">

    <form id="novo-curso-form" @submit="createCurso">  
    <h1>Novo Curso</h1>
    <div>
      
          <div class="input-container">
              <label for="nomeCurso"></label>
              <input type="text" id="titulo" name="nomeCurso" v-model="nomeCurso" placeholder="Titulo">
          </div>
          <div class="input-container">
              <label for="caminhoCapa"></label>
              <input type="text" id="capa" name="caminhoCapa" v-model="caminhoCapa" placeholder="upload capa">
          </div>
          <div class="input-container">
              <label for="nomeProfessor"></label>
              <input type="text" id="prof" name="nomeProfessor" v-model="nomeProfessor" placeholder="Professor">
          </div>
          <div class="input-container">
              <label for="descricaoCurso"></label>
              <input type="text" id="desc" name="descricaoCurso" v-model="descricaoCurso" placeholder="Descrição">
          </div>
      
  </div>
  <p> Aula 1 <p>
  <div>
     
          <div class="input-container">
              <label for="titulo_aula"></label>
              <input type="text" id="titulo_aula" name="titulo_aula" v-model="titulo_aula" placeholder="Titulo da aula">
          </div>
          <div class="input-container">
              <label for="link"></label>
              <input type="text" id="link" name="link" v-model="link" placeholder="Link da aula">
          </div>
          <div class="input-container">
              <label for="desc_aula"></label>
              <input type="text" id="desc_aula" name="desc_aula" v-model="desc_aula" placeholder="Descrição da aula">
          </div>
         
  
  </div>
  <p> Aula 2 <p>
  <div>
      
          <div class="input-container">
              <label for="titulo_aula"></label>
              <input type="text" id="titulo_aula" name="titulo_aula" v-model="titulo_aula" placeholder="Titulo da aula">
          </div>
          <div class="input-container">
              <label for="link"></label>
              <input type="text" id="link" name="link" v-model="link" placeholder="Link da aula">
          </div>
          <div class="input-container">
              <label for="desc_aula"></label>
              <input type="text" id="desc_aula" name="desc_aula" v-model="desc_aula" placeholder="Descrição da aula">
          </div>
         
   
  </div>
  <p> Aula 3 <p>
  <div>
  
          <div class="input-container">
              <label for="titulo_aula"></label>
              <input type="text" id="titulo_aula" name="titulo_aula" v-model="titulo_aula" placeholder="Titulo da aula">
          </div>
          <div class="input-container">
              <label for="link"></label>
              <input type="text" id="link" name="link" v-model="link" placeholder="Link da aula">
          </div>
          <div class="input-container">
              <label for="desc_aula"></label>
              <input type="text" id="desc_aula" name="desc_aula" v-model="desc_aula" placeholder="Descrição da aula">
          </div>
         
     
  </div>
  <div class="input-container">
      <input type="submit" class="submit-btn" value="Salvar">
  </div>
  </form> 
  <div class="rodape">
      <b-img class="logo-rodape" src="https://i.ibb.co/hfst53K/dindin-logo-white.png" fluid alt="Responsive image"></b-img>
      <span class="dindin-rodape">dindin</span>
      <span class="slogan-rodape">educação financeira</span>
  </div>  
  </div>

  
</template>

<script>

import Baseboard from '../components/Baseboard.vue'
export default {
  components: {Baseboard},
  name:"Register",
  data() {
      return{
          nomeCurso: null,
          caminhoCapa: null,
          nomeProfessor: null,
          descricaoCurso: null,
          titulo_aula: null,
          link: null,
          desc_aula: null
      }
  },
  methods: {
  async createCurso(e) {
    e.preventDefault();
    
    const data = {
      nomeCurso: this.nomeCurso,
      caminhoCapa: this.caminhoCapa,
      nomeProfessor: this.nomeProfessor,
      descricaoCurso: this.descricaoCurso,
      titulo_aula: this.titulo_aula,
      link: this.link,
      desc_aula: this.desc_aula    }
    const dataJson = JSON.stringify(data);
    
    const req = await fetch("https://dindincursos.azurewebsites.net/V1/cursos/",{
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: dataJson});

    const res = await req.json();

    //limpar
    this.nomeCurso = "";
    this.caminhoCapa = "";
    this.nomeProfessor = "";
    this.descricaoCurso = "";
    this.titulo_aula = "";
    this.link = "";
    this.desc_aula = "";
  }
}
}
</script>

<style scoped>
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


.rodape {
    display:flex;
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
.novo{
  margin: 0 auto;
  padding: 0 auto;
  text-align: left;
  margin-top: 214px;
  background: rgb(255, 255, 255);
}
h1{
    
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 33px;
    text-transform: capitalize;
    color: #FF4081;
    margin-left:82px;
}
.input-container{
padding: 9px;

}
input{
     
    
    border: 1px solid #AEAEAE;
    box-sizing: border-box;
    height: 40px; 
    width: 811px;  
    background: #FFFFFF;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-left: 83px;

    
}
p{
    
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    color: #419488;
    margin-left: 83px;
}
.submit-btn{
    height: 53px;
    width: 233px;
    background: #2E948A;
    border-radius: 62px;
    color:#FFFFFF;
    margin-left:83px;
    margin-top: 43px;
    margin-bottom: 163px;
    
}
</style>