<template>
    <h1 class="header-title">{{title}}</h1>
</template>

<script>
    export default {
        data () {
            return {
                title: '听我的歌'
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    $rem: 75;
    h1.header-title {
        width:100%;
        height:70rem/$rem; /* 70 / 10 */
        background: #d9534f;
        font-size: 30rem/$rem;
        font-weight: normal;
        color: #ffffff;
        font-family: 'microsoft yahei';
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>