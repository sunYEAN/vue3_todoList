<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    body{
        font-size: 16px;
    }
    #app {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #f3f5f7;
    }
</style>
<style scoped lang="less">
    .app{
        width: 100%;
        height: 100%;
    }
    .toggle{
        position: fixed;
        z-index: 10;
    }

</style>
