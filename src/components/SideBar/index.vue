<template>
    <v-mask v-model:visible="status">
        <transition name="translateX">
            <aside v-if="status" class="side-bar">
                <section class="banner"></section>
                <section class="list">
                    <div class="item sub-item" v-for="i in categories" :key="i.id">
                        <p class="cate-name">
                            <i class="icon_menu"></i>
                            <span>{{i.name}}</span>
                        </p>
                        <i class="c-count">1</i>
                    </div>
                    <div class="cate-add" @click="showForm">
                        <i class="icon_plus"></i>添加
                    </div>

                    <div class="cate-wrap">
                        <div class="sub-item cate-line">
                            <svg t="1600266018940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10044" width="64" height="64"><path d="M102.4 51.2a51.2 51.2 0 0 0-51.2 51.2v819.2a51.2 51.2 0 0 0 51.2 51.2h819.2a51.2 51.2 0 0 0 51.2-51.2V102.4a51.2 51.2 0 0 0-51.2-51.2H102.4z m0-51.2h819.2a102.4 102.4 0 0 1 102.4 102.4v819.2a102.4 102.4 0 0 1-102.4 102.4H102.4a102.4 102.4 0 0 1-102.4-102.4V102.4a102.4 102.4 0 0 1 102.4-102.4zM51.2 204.8h921.6v51.2H51.2V204.8z m392.192 525.4656L712.0384 481.28a25.6 25.6 0 0 1 34.816 37.5808l-286.464 265.4208a25.6 25.6 0 0 1-35.1744-0.3072l-158.1056-151.9616a25.6 25.6 0 1 1 35.4304-36.864l140.8 135.168z" fill="#8a8a8a" p-id="10045"></path></svg>
                            <span>Completed</span>
                        </div>
                        <div class="sub-item cate-trash">
                            <svg t="1600266347587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10930" width="64" height="64"><path d="M793.6 102.4H614.4v-25.6c0-42.3424-34.4576-76.8-76.8-76.8h-102.4C392.8576 0 358.4 34.4576 358.4 76.8V102.4H179.2C136.8576 102.4 102.4 136.8576 102.4 179.2v51.2c0 33.3824 21.4016 61.8496 51.2 72.3968V947.2c0 42.3424 34.4576 76.8 76.8 76.8h512c42.3424 0 76.8-34.4576 76.8-76.8V302.7968c29.7984-10.5472 51.2-39.0144 51.2-72.3968v-51.2c0-42.3424-34.4576-76.8-76.8-76.8zM409.6 76.8a25.6 25.6 0 0 1 25.6-25.6h102.4a25.6 25.6 0 0 1 25.6 25.6V102.4H409.6v-25.6zM742.4 972.8h-512a25.6 25.6 0 0 1-25.6-25.6V307.2h563.2v640a25.6 25.6 0 0 1-25.6 25.6zM819.2 230.4a25.6 25.6 0 0 1-25.6 25.6h-614.4a25.6 25.6 0 0 1-25.6-25.6v-51.2a25.6 25.6 0 0 1 25.6-25.6h614.4a25.6 25.6 0 0 1 25.6 25.6v51.2z" p-id="10931" fill="#8a8a8a"></path><path d="M640 358.4a25.6 25.6 0 0 0-25.6 25.6v512a25.6 25.6 0 0 0 51.2 0v-512a25.6 25.6 0 0 0-25.6-25.6zM486.4 358.4a25.6 25.6 0 0 0-25.6 25.6v512a25.6 25.6 0 0 0 51.2 0v-512a25.6 25.6 0 0 0-25.6-25.6zM332.8 358.4a25.6 25.6 0 0 0-25.6 25.6v512a25.6 25.6 0 0 0 51.2 0v-512a25.6 25.6 0 0 0-25.6-25.6z" p-id="10932" fill="#8a8a8a"></path></svg>
                            <span>Trash</span>
                        </div>
                    </div>
                </section>
            </aside>
        </transition>

        <form-table v-model:visible="formTable"></form-table>
    </v-mask>
</template>

<script>
    import {ref, watch} from 'vue';
    import VMask from '../Mask';
    import FormTable from './formTable';
    import {useCategories} from '../../useCategories'


    function useFormTable() {
        let formTable = ref(false);

        const showForm = function () {
            formTable.value = true
        };

        return {
            showForm,
            formTable,
        }
    }

    export default {
        name: "sideBar",
        props: {
            visible: Boolean
        },
        components: {
            VMask,
            FormTable
        },
        setup (props, context) {
            let mask = ref(null);
            let list = ref([{title: 'Completed'}, {title: 'Trash'}]);
            let status = ref(props.visible);

            const {categories, addOne, removeOne} = useCategories();

            const {formTable, showForm} = useFormTable();

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
                list,
                status,
                addOne,
                showForm,
                formTable,
                removeOne,
                categories,
            }
        }
    }
</script>

<style scoped lang="less">
    .sub-item{
        width: 100%;
        height: 40px;
        margin: 10px auto 0;
        display: flex;
        padding: 0 10px;
        box-sizing: border-box;
        align-items: center;
        border-radius: 2px;
        transition: all 0.1s linear;
        justify-content: space-between;
        &:active,&:visited{
            transform: scale(0.9);
            background-color: #f3f5f7;
        }
    }
    .side-bar{
        top: 0;
        left: 0;
        color: #565656;
        width: 60%;
        height: 100%;
        display: flex;
        position: fixed;
        overflow: hidden;
        font-size: 16px;
        box-shadow: 0 0 18px rgba(0,0,0,0.5);
        flex-direction: column;
        background-color: #ffffff;
        section.banner{
            width: 100%;
            height: 60px;
            background-color: #76b9a5;
        }
        section.list{
            flex: 1;
            width: 100%;
            margin: 0 auto;
            overflow: auto;
            padding-bottom: 50px;
            .item{
                .cate-name{
                    display: flex;
                    align-items: center;
                    .icon{
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                    }
                    .icon_menu{
                        width: 18px;
                        height: 18px;
                        background: url("../../assets/icon_menu.png")no-repeat center center;
                        margin-right: 10px;
                        background-size: 90%;
                    }
                }
                .c-count{
                    color: #999;
                    font-size: 12px;
                }
                .icon_plus{
                    width: 18px;
                    height: 18px;
                    background: url("../../assets/icon_plus.png")no-repeat center center;
                    background-size: 60%;
                }
            }

            .cate-add{
                width: 80px;
                color: #787878;
                height: 26px;
                border: 1px dashed #a0a0a0;
                margin: 15px auto;
                display: flex;
                overflow: hidden;
                font-size: 14px;
                transition: all 0.1s linear;
                align-items: center;
                border-radius: 6px;
                justify-content: center;
                background-color: #f3f5f7;
                &:active,&:visited{
                    color: #333;
                    transform: scale(0.9);
                    background-color: #d0d0d0;
                }
            }

            .cate-wrap{
                display: block;
                overflow: hidden;
                position: relative;
                &:after{
                    top: 0;
                    left: 0;
                    width: calc(100% - 10px);
                    height: 1px;
                    display: block;
                    content: "";
                    position: absolute;
                    background-color: #e0e0e0;
                }
                >div{
                    justify-content: flex-start;
                    .icon{
                        width: 18px;
                        height: 18px;
                        margin-right: 10px;
                    }
                }
                .cate-line{
                    margin-top: 15px;
                }
            }
        }
    }
</style>
