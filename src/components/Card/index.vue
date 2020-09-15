<template>
    <section class="list-item">
        <h3 class="item-t">{{item.title}}</h3>
        <p class="item-c">{{item.content}}</p>
        <p class="item-a">
            <span>发表于: <b>{{item.createTime}}</b></span>
            <span v-if="item.updateTime">更新于: <b>{{item.updateTime}}</b></span>
        </p>
    </section>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        name: "Card"
    }
</script>

<style scoped lang="less">
    .list-item{
        width: calc(100% - 20px);
        margin: 14px auto 0;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
        border-radius: 4px;
        background-color: #ffffff;
        .item-t{
            padding: 6px 0 8px 0;
            font-size: 17px;
            border-bottom: 1px solid #d0d0d0;
        }
        .item-c{
            color: #666;
            margin-top: 8px;
            line-height: 1.4;
        }
        .item-a{
            color: #999;
            display: flex;
            font-size: 12px;
            margin-top: 8px;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
