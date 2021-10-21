<template>
    <div class="error-page">
        <b-img class="error-page-img" src="https://blog.webjeda.com/assets/thumbs/jekyll-build-error-troubleshooting.png" fluid alt="Responsive image"></b-img>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    components: {Header}
}
</script>

<style>
.error-page-img {
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    margin: 17% 30%;
}
</style>