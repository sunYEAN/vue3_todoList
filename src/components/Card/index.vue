<template>
	<section class="list-item" @click="handleItemClick(item)">
		<i class="check border-1px"></i>
		<div class="item-t border-bottom-1px">
			<h3 class="title" :class="[item.updateTime ? 't_time' : '', showDetail ? 'more' : '']">
				{{item.title}}
				<span class="time" v-if="item.updateTime">
					<b>{{item.updateTime}}</b>
				</span>
			</h3>
            <p v-if="showDetail" class="desc">{{item.content.substr(0, 60)}}</p>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default() {
					return {};
				}
            },
            showDetail: Boolean
		},
		name: "Card",
		methods: {
			handleItemClick(item) {
				this.$emit("onselected", item);
			}
		}
	};
</script>

<style scoped lang="less">
	.list-item {
		width: calc(100% - 30px);
		margin: 0 20px 0 10px;
		display: flex;
		box-sizing: border-box;
		transition: all 0.1s ease-in-out;
		align-items: center;
		padding-left: 10px;
		&:active,
		&:visited {
			color: #999;
			box-shadow: none;
			background-color: rgba(0, 0, 0, 0.1);
			.item-c,
			.item-a {
				color: #999;
			}
		}
		.check {
			width: 12px;
			height: 12px;
            margin-right: 5px;
		}
		.item-t {
			flex: 1;
			padding: 4px 10px;
			.title {
				color: #333;
                height: 36px;
                overflow: hidden;
                position: relative;
                line-height: 36px;
                white-space: nowrap;
                text-overflow: ellipsis;
                &.t_time{
                    box-sizing: border-box;
                    padding-right: 70px;
                }
                &.more {
                    height: 30px;
                    line-height: 30px;
                }
				.time {
					top: 50%;
					right: 0;
					color: #a0a0a0;
					position: absolute;
					transform: translateY(-50%);
					font-size: 12px;
				}
            }
            .desc{
                color: #787878;
                margin: 6px 0;
                font-size: 14px;
            }
		}
	}
</style>
