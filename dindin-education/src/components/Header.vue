<template>
    <div id="nav">
        <img class="dindin-logo" alt="DINDIN Logo" src="../assets/dindin-logo-white.png">
        <h1 class="dindin-logo2">dindin</h1>
        <b-navbar toggleable="md" type="dark" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="course" to="/">CURSOS</router-link>
                    <router-link class="painel-adm" to="/painel">PAINEL ADMINISTRATIVO</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
#nav {
    position: absolute;
    width: 100%;
    height: 117px;
    left: 0px;
    top: 0px;

    background: #2E948A;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
}

.course {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
 
    right: 332px;
    top: 47px;
    text-decoration: none;

    font-family:'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    /* identical to box height */

    text-transform: uppercase;

    color: #FDFDFD;
}

.painel-adm {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 23px;
    right: 40px;
    top: 47px;
    text-decoration: none;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;  

    /* identical to box height */

    text-transform: uppercase;

    color: #FDFDFD;
}

.dindin-logo {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 69px;
    height: 71px;
    left: 82px;
    top: 20px;
}

.dindin-logo2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 164px;
    height: 64px;
    left: 162px;
    top: 33px;

    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 64px;

    color: #FFFFFF;
}
</style>