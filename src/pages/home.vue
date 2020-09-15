<template>
    <div class="home">
        <card @onselected="handleSelected" v-for="i in state.list" :item="i" :key="i.id"/>
    </div>
</template>

<script>
    import {reactive} from 'vue';
    import Card from '../components/Card'

    export default {
        name: "home",
        components: {Card},
        methods: {
            handleSelected (item) {
                this.$router.push('/detail/' + item.id);
            }
        },
        setup() {
            const state = reactive({
                list: [
                    {
                        id: 1,
                        title: '标题',
                        content: '内容',
                        createTime: '2020-09-16',
                        updateTime: ''
                    },
                    {
                        id: 2,
                        title: '标题',
                        content: '内容',
                        createTime: '2020-09-16',
                        updateTime: ''
                    },
                    {
                        id: 3,
                        title: '标题',
                        content: '内容',
                        createTime: '2020-09-16',
                        updateTime: '2020-09-17'
                    }
                ]
            });


            return {
                state
            }

        }
    }
</script>

<style scoped>

</style>
