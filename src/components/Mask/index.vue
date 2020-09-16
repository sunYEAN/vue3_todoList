<template>
    <transition name="opacity">
        <div v-show="visible" @click="hideMask" class="mask" data-type="mask">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "myMask",
        props: {
            visible: Boolean
        },
        setup (props, context) {
            function hideMask (e) {
                if (e.target.dataset.type === 'mask') {
                    context.emit('update:visible', false);
                }
            }
            return {
                hideMask
            }
        }
    }
</script>

<style scoped lang="less">
    .mask{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0,0,0,0.5);
    }
</style>
