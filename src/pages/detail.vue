<template>
    <div class="detail">
        <header class="header border-bottom-1px">
            <div class="back-wrap">
				<span class="back" @click="$route.matched.length > 1 ? $router.back() : $router.replace('/')">
				<svg
                        t="1600335893235"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5649"
                        width="18"
                        height="18"
                >
					<path
                            d="M156.444444 469.333333H1024v85.333334H156.444444L568.888889 967.111111l-56.888889 56.888889-512-512 512-512 56.888889 56.888889z"
                            p-id="5650"
                            fill="#515151"
                    />
				</svg>
			</span>
            </div>

            <div class="title" ref="elTitle">Record Detail</div>
            <div class="title copy-title" ref="elTitleCopy" style="height: 40px;">{{record.title}}</div>
            <div class="cate-wrap" ref="elCateCopy">
                <i class="icon-cate"></i>
                <span>{{record.category}}</span>
            </div>
        </header>
        <article ref="elArticle" @touchmove.prevent>
            <div class="wrapper">
                <h2 class="title">{{record.title}}</h2>
                <div class="cate-wrap" ref="elCate">
                    <i class="icon-cate"></i>
                    <span>{{record.category}}</span>
                </div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>
                <div>{{record.content || 'content'}}</div>

            </div>
        </article>
    </div>
</template>

<script>
    import {reactive, onMounted, onBeforeUnmount, ref} from "vue";
    import {useRoute} from "vue-router";
    import {getLocalStorage, getCenterPoint, getRound} from "../utils";
    import IScroll from 'iscroll/build/iscroll-probe';

    function getCurrentRecord({category, id}) {
        let issues = getLocalStorage("issues");
        let records = issues[category] || [];
        return records.find(item => item.id == id) || {};
    }

    function getAnimation (fromEl, toEl) {
        const {y, originX} = getCenterPoint(fromEl);
        const {y: y1, originX: originX1} = getCenterPoint(toEl);
        return {
            disX: getRound(originX1 - originX),
            disY: getRound(y1 - y),
        }
    }

    function useTouchEvent() {
        let scroller = null;

        const elCate = ref(null);
        const elTitle = ref(null);
        const elArticle = ref(null);
        const elCateCopy = ref(null);
        const elTitleCopy = ref(null);


        function handleMove() {
            let {y} = scroller;
            y = Math.abs(y);

            const {disX, disY} = getAnimation(elTitleCopy.value, elTitle.value);
            const percent = getRound(Math.max(Math.min(Math.abs(y / disY), 1), 0));
            elTitle.value.style.cssText = `opacity: ${1 - percent}; transform: translateY(${percent * disY}px)`;
            elTitleCopy.value.style.cssText = `opacity: ${percent}; transform: translate(${percent * disX}px, ${percent * disY}px)`;


            const {disY: disCateY} = getAnimation(elCateCopy.value, elCate.value);
            const percentCate = getRound(Math.max(Math.min(Math.abs((y - disY) / disCateY), 1), 0));
            console.log(percentCate);
            elCateCopy.value.style.cssText = `opacity: ${1 - percent}; transform: translateY(${percentCate * disCateY}px)`;

            // if (y > 0 && y < disY) {
            // }
            //
            // 马上切换category的时候
            // if (y > top && y < top + cateHeight) {
            //     const percent = Math.round(100 * Math.min(1, Math.max(0, (y - top) / cateHeight))) / 100;
            //     elCateCopy.value.style.cssText = `opacity: ${percent}; transform: translateY(${- percent * cateHeight}px)`;
            // }


        }

        onMounted(() => {
            scroller = new IScroll(elArticle.value, {
                bounce: false,
                probeType: 3,
                scrollBars: true,
            });
            scroller.on('scroll', handleMove);
        });


        onBeforeUnmount(() => {
            scroller.off('scroll', handleMove);
        });


        return {
            elCate,
            elTitle,
            elArticle,
            elCateCopy,
            elTitleCopy,
        }
    }

    export default {
        name: "detail",
        setup() {
            const {params} = useRoute();
            const state = reactive({});
            const record = getCurrentRecord(params);
            const {elCate, elTitle, elArticle, elCateCopy, elTitleCopy} = useTouchEvent();

            record.time = new Date(record.time)
                .toLocaleDateString()
                .replace(/\//g, "-");


            return {
                state,
                record,
                params,
                elCate,
                elTitle,
                elArticle,
                elCateCopy,
                elTitleCopy
            };
        }
    };
</script>

<style scoped lang="less">
    .title {
        height: 60px;
        font-size: 20px;
        line-height: 60px;
        padding-left: 20px;
    }

    .cate-wrap {
        color: #676767;
        display: flex;
        font-size: 14px;
        align-items: center;

        .icon-cate {
            width: 16px;
            height: 16px;
            display: block;
            background: url("../assets/category.png") no-repeat center center;
            margin-right: 6px;
            background-size: contain;
        }
    }

    .detail {
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        padding-top: 60px;
        background-color: #ffffff;

        header.header {
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            padding: 0 10px;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-sizing: border-box;
            align-items: center;
            background-color: #f0f0f0;

            .copy-title {
                left: 0;
                top: 100%;
                opacity: 0;
                position: absolute;
                /*transition: transform 0.05s linear;*/
            }

            .time {
                color: #999;
                display: flex;
                font-size: 14px;
                align-items: center;
                margin-right: 20px;

                .icon {
                    margin-right: 6px;
                }
            }

            .cate-wrap {
                height: 100%;
            }
        }

        article {
            width: 100%;
            height: calc(100% - 60px);
            overflow: hidden;
            position: relative;

            .wrapper {
                padding: 0 10px;
            }
        }
    }
</style>
