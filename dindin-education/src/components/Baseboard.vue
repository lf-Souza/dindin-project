<template>
  <div id="nav">
      <img class="dindin-logo" alt="DINDIN Logo" src="../assets/dindin-logo-white.png">
      <h1 class="dindin-logo2">dindin</h1>
      <h2 class="dindin-logo3">educação financeira</h2>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

#nav {
    position: absolute;
    width: 100%;
    height: 207px;
    left: 0%;
    bottom: 0%;

    background: #2E948A;
}

.dindin-logo {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 98.57px;
    height: 101.43px;
    left: 128px;
    top: 53px;
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

</style>