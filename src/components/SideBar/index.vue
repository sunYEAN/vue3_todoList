<template>
    <v-mask v-model:visible="status">
        <transition name="translateX">
            <div v-if="status" class="side-bar">
                <ul>
                    <li v-for="i in categories" :key="i.id">{{i.name}}</li>
                </ul>
            </div>
        </transition>
    </v-mask>
</template>

<script>
    import {ref, watch} from 'vue';
    import VMask from '../Mask';

    import {getLocalStorage, setLocalStorage} from '../../utils'

    const cate_name = 'categories';

    function useCategories() {
        let id = ref(getLocalStorage('id') || 0);
        let categories = ref(getLocalStorage(cate_name) || []);

        const addOne = function (name) {
            const item = categories.value.find(item => item.name === name);
            if (item) {
                alert('该分类已存在')
            } else {
                categories.value.unshift({
                    id: ++id,
                    name
                })
            }
            setLocalStorage(cate_name, categories.value);
        };

        const removeOne = function (id) {
            const index = categories.value.findIndex(item => item.id === id);
            if (~index) {
                categories.value.splice(index, 1);
            }
            localStorage.setItem(cate_name, categories.value);
        };

        return {
            categories,
            addOne,
            removeOne
        }
    }

    export default {
        name: "sideBar",
        props: {
            visible: Boolean
        },
        components: {
            VMask,
        },
        setup (props, context) {
            let mask = ref(null);
            let status = ref(props.visible);

            const {categories, addOne, removeOne} = useCategories();

            watch(
                () => props.visible,
                (value) => {
                    status.value = value;
                }
            );

            watch(
                status,
                (value) => {
                    if (value === props.visible) return;
                    context.emit('update:visible', value);
                }
            );

            return {
                mask,
                status,
                addOne,
                removeOne,
                categories
            }
        }
    }
</script>

<style scoped lang="less">
    .side-bar{
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        position: fixed;
        box-shadow: 0 0 18px rgba(0,0,0,0.5);
        background-color: pink;
    }
</style>
