<template>
  <div class="painel">
    <h1 class="title-painel"> Painel Administrativo </h1>
    <h2 class="subtitle-painel"> Educação financeira é tudo de bom </h2>
    <div class="table-title">
      <h3 class="title1">Curso</h3>
      <h3 class="title2">Ações</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

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
  left: 457px;
  top: 8px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
}

</style>