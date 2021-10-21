<!-- Componente: rodape das pages -->

<template>
  <div id="rodape">
      <img class="dindin-logo" alt="DINDIN Logo" src="../assets/dindin-logo-white.png">
      <span class="dindin-logo2">dindin</span>
      <span class="dindin-logo3">educação financeira</span>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

#rodape {
    width: 100%;
    height: 207px;
    left: 0%;
    bottom: 0px;

    background: #2E948A;
}

.dindin-logo {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 98.57px;
    height: 101.43px;
    left: 128px;
    margin: 53px;
}

.dindin-logo2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 198px;
    height: 58px;
    left: 242px;
    bottom: 0px;

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
    width: 168px;
    height: 22px;
    left: 249px;
    bottom: 0px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 22px;

    color: #FFFFFF;
}

</style>