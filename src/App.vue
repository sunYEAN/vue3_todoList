<template>
    <div>
        <button class="toggle" @click="showSideBar">{{visible}}</button>
        <side-bar v-model:visible="visible"/>
        <router-view/>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import SideBar from './components/SideBar'

    // // sidebar相关逻辑
    function useHandleSideBar () {
        let visible = ref(false);

        const showSideBar = function () {
            visible.value = !visible.value;
            console.log(visible.value);
        };

        return {
            visible,
            showSideBar
        }
    }

    export default {
        name: 'App',
        components: {
            SideBar
        },
        methods: {
        },
        setup () {

            const {visible, showSideBar} = useHandleSideBar();

            return {
                visible,
                showSideBar
            }
        }
    }
</script>

<style scoped lang="less">
    .app {
        background-color: pink;
    }
    .toggle{
        position: fixed;
        z-index: 10;
    }

</style>
