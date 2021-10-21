<template>
  <div class="curso-home">
    <h2 class="title">Cursos</h2>
    <hr/>

    <div id="card_curso2">
      <div id="title">
        <h3 class="bb1">Investimento para Iniciantes</h3>
      </div>
      <div id="img">
        <img class="dindin-logo"  
        alt="Curso 2" src="../assets/image3.png"
        img-left
        style="max-width: 20rem;"
        >
      </div>
      <div id="texto">
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div id="botao">
          <b-button href="#" variant="success">Começar Agora</b-button>
         </div>
      </div>
    </div>

    <div id="card_curso3">
      <div id="title">
        <h3>Poupando e rendendo</h3>
      </div>
      <div id="img">
        <img class="dindin-logo"  
        alt="Curso 2" src="../assets/image2.png"
        img-left
        style="max-width: 20rem;"
        >
      </div>
      <div id="texto">
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div id="botao">
          <b-button href="#" variant="success">Começar Agora</b-button>
         </div>
      </div>
    </div>

    <div id="card_curso4">
      <div id="title">
        <h3>Independência Financeira</h3>
      </div>
      <div id="img">
        <img class="dindin-logo"  
        alt="Curso 2" src="../assets/image4.png"
        img-left
        style="max-width: 20rem;"
        >
      </div>
      <div id="texto">
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div id="botao">
            <b-button href="#" variant="success">Começar Agora</b-button>
         </div>
      </div>
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

.curso-home{
  margin: 150px;
  padding: 0 auto;
  width: 1000px;
  height: 250px;
}


#card_curso2{
width: 90%;
height: 90%;
border-radius: 7px;
/* border: solid 1px #ccc; */
padding-bottom:20px;
margin-bottom:20px;

}

#title{
width: 90%;
margin:10px;
padding: 10px;
}

#title h3{
  color:mediumvioletred
}

#img .dindin-logo{
background:#fff;
width: 35%;
float:left
}

#texto{
width: 60%;
height:400px;
float: right;
}

#texto p{
  text-align: justify;
  margin: 7%;
}

#botao{  
width: 60%;
height: 50px;
padding-top:5%;
margin-left:10%;
}

.b-button{
padding-top: 40%;
margin-top:40%; 
margin-left: 30%;
width: 100%;
background: rgb(4, 126, 65);
}



#card_curso3{
width: 90%;
border-radius: 7px;

}

#card_curso3 #title{
width: 100%;
float: right;
}

#title h3{
  color:mediumvioletred
}

#img .dindin-logo{
background:#fff;
width: 35%;
float:left
}

#texto{
width: 60%;
height:400px;
float: right;
}

#texto p{
  text-align: justify;
  margin: 7%;
}

#botao{  
width: 60%;
height: 50px;
padding-top:5%;
margin-left:10%;
}
.b-button{
padding-top: 40%;
margin-top:40%; 
margin-left: 30%;
width: 100%;
background: rgb(4, 126, 65);
}

#card_curso4{
width: 90%;
height: 90%;
border-radius: 7px;
/* border: solid 1px #ccc; */
}

#card_curso4 #title{
width: 90%;
margin:10px;
padding: 10px;
}

#card_curso4 #title h3{
  color:mediumvioletred
}

#card_curso4 #img .dindin-logo{
background:#fff;
width: 35%;
float:left
}

#card_curso4 #texto{
width: 60%;
height:400px;
float: right;
}

#card_curso4 #texto p{
  text-align: justify;
  margin: 7%;
}

#card_curso4 #botao{  
width: 60%;
height: 50px;
padding-top:5%;
margin-left:10%;
}

#card_curso4 .b-button{
padding-top: 40%;
margin-top:40%; 
margin-left: 30%;
width: 100%;
background: rgb(4, 126, 65);
}

</style>

