<template>
    <transition name="scaleIn">
        <div v-show="visible" class="form-wrap" data-type="mask" @click="handleClosed">
            <div class="form-table">
                <h3 class="header">
                    新增分类
                    <span data-type="mask" class="icon">
                        <svg data-type="mask" t="1600272827053" class="svg" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="11906" width="64" height="64"><path
                            d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
                            p-id="11907" fill="#707070"></path></svg>
                    </span>
                </h3>
                <div class="form-name">
                    <label>
                        <input type="text" v-model="form.name" placeholder="Name">
                    </label>
                </div>
                <div class="form-color">
                    <label class="color-item"
                           v-for="i in colors"
                           :style="{background: i}" :key="i">
                        <input type="radio" :value="i" v-model="form.color">
                        <i :style="{background: i}" :class="['icon', form.color === i ? 'selected' : '']"></i>
                    </label>
                </div>
                <div class="form-action">
                    <button class="close" data-type="mask">取消</button>
                    <button class="save" @click="handleSave">保存</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {reactive} from 'vue';
    import {useCategories} from '../../useCategories'

    const colors = [
        '',
        '#4aa6ef',
        '#52b8d2',
        '#6cbe5e',
        '#a0bb31',
        '#ffd966',
        '#f2b04b',
        '#f18181',
        '#ed70a5',
        '#9842eb',
        '#6fe9be',
        '#5992f8',
        '#ec6666'
    ];

    export default {
        name: "formTable",
        props: {
            visible: Boolean
        },
        setup(props, context) {
            let form = reactive({
                name: '',
                color: '',
                colors: colors
            });

            let {categories, addOne} = useCategories();

            function handleClosed(e) {
                if (e.target.dataset.type === 'mask') context.emit('update:visible', false);
            }

            function handleSave () {
                const {name, color} = form;
                if (categories.value.find(item => item.name === name)) {
                    alert('已经存在了');
                } else {
                    addOne({name, color});
                    alert('保存成功!');
                    context.emit('update:visible', false);
                }
            }

            return {
                form,
                colors,
                handleSave,
                handleClosed,
            }
        }
    }
</script>

<style scoped lang="less">
    .form-wrap {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);

        .form-table {
            width: calc(100% - 10px);
            padding: 0 20px 20px 20px;
            box-sizing: border-box;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            background-color: #ffffff;

            .header {
                height: 60px;
                display: flex;
                position: relative;
                align-items: center;
                padding-right: 20px;

                .icon {
                    right: -10px;
                    width: 20px;
                    height: 20px;
                    padding: 10px;
                    position: absolute;
                    .svg{
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .form-name {
                input {
                    color: #676767;
                    width: 100%;
                    height: 40px;
                    border: 1px solid #e0e0e0;
                    padding: 0 10px;
                    display: block;
                    margin-top: 15px;
                    box-sizing: border-box;
                    border-radius: 4px;
                }
            }

            .form-color {
                display: flex;
                flex-wrap: wrap;
                margin-top: 15px;

                .color-item {
                    width: 25px;
                    height: 25px;
                    display: block;
                    position: relative;
                    margin-top: 10px;
                    margin-right: 8px;
                    border-radius: 50%;
                    background-color: #999;

                    .icon {
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: block;
                        opacity: 0.5;
                        position: absolute;
                        transform: scale(0);
                        background: #999;
                        transition: all 0.1s ease-in-out;
                        border-radius: 50%;

                        &.selected {
                            transform: scale(1.25);
                        }
                    }
                }

                input {
                    opacity: 0;
                }
            }

            .form-action {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-top: 30px;

                button {
                    width: 100px;
                    height: 30px;
                    border: 1px solid #333;
                    outline: none;
                    margin-left: 10px;
                    border-radius: 2px;
                }

                .close {
                    border-color: #e0e0e0;
                    background-color: #f3f5f7;
                }

                .save {
                    color: #ffffff;
                    border-color: #7988B6;
                    background-color: #9eb1ed;
                }
            }
        }
    }
</style>
