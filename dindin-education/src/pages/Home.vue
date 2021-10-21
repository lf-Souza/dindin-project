<template>
  <div class="curso-home">
     
      <div div id="home">
        <img class="dindin-logo" 
        alt="Pagina Inicial" src="../assets/dindin-logo-white.png"
        img-left
        style="max-width: 20rem;"
        >
      
        <b-card-text>
         <p> Bem-vindos à  DinDin! Aqui você encontra o melhor conteúdo sobre educação financeira.
          Veja nossos cursos e conte conosco para o que precisar. </p>
        </b-card-text>
        <router-link class="course" to="/course"><b-button>Nossos Cursos</b-button></router-link>
     </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  
  mounted(){
    this.getCursos().then(()=>{
      this.getAulas()
    })

    console.log('CURSOS', this.cursos)
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


<style scoped>
#home{
  margin-top: 150px !important;
  margin: 0 auto;
  padding: 0 auto;
  text-align: center;
  width: 60%;
  height: 400px;
  background: rgb(63, 158, 91);
  color: #FFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif bold;
}

#home p{
  text-align: justify;
  margin-left: 8px;
  margin-right: 8px;
}

#home button{
  background:rgb(202, 47, 137);
}

#curso-home b-button{
  border-radius: 7px;
}

.card_curso{
  margin: 0 auto;
  padding: 0 auto;
  
}
</style>