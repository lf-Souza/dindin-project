<template>
  <div div="curso-home">
    <h1>Cursos</h1>
    <div class="card_curso">
      <b-card
        title="Investimento para Iniciantes"
        img-src="../assets/image3.png"
        img-left
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="success">ComeÃ§ar Agora</b-button>
      </b-card>
    </div>

    <div class="card_curso">
      <b-card
        title="Poupando e rendendo"
        img-src="../assets/image2.png"
        img-alt="Image"
        img-left
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="success">ComeÃ§ar Agora</b-button>
      </b-card>
    </div>

    <div class="card_curso">
      <b-card
        title="IndependÃªncia Financeira"
        img-src="../assets/image2.png"
        img-alt="Image"
        img-left
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="success">ComeÃ§ar Agora</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#curso-home{
  margin: 0 auto;
  padding: 0 auto;
  text-align: center;
  background: red;
  float: right;
}

#curso-home b-button{
  border-radius: 7px;
}

.card_curso{
  margin: 0 auto;
  padding: 0 auto;
  
}
</style>