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
            <!--<span class="time">-->
            <!--<svg-->
            <!--t="1600335929320"-->
            <!--class="icon"-->
            <!--viewBox="0 0 1024 1024"-->
            <!--version="1.1"-->
            <!--xmlns="http://www.w3.org/2000/svg"-->
            <!--p-id="6488"-->
            <!--width="18"-->
            <!--height="18"-->
            <!--&gt;-->
            <!--<path-->
            <!--d="M702.178304 511.314944 512.681984 511.314944l0-245.42208c0-18.556928-9.74848-33.605632-28.305408-33.605632-18.55488 0-28.30336 15.048704-28.30336 33.605632l0 268.510208c0 18.470912 15.050752 33.521664 33.52064 33.521664l212.585472 0c18.556928 0 33.521664-9.749504 33.52064-28.304384C735.699968 521.063424 720.735232 511.314944 702.178304 511.314944z"-->
            <!--p-id="6489"-->
            <!--fill="#707070"-->
            <!--/>-->
            <!--<path-->
            <!--d="M511.998976 64.510976C264.865792 64.510976 64.512 264.866816 64.512 512c0 247.131136 200.353792 447.486976 447.486976 447.486976C759.13216 959.486976 959.488 759.131136 959.488 512 959.488 264.866816 759.13216 64.510976 511.998976 64.510976zM511.998976 903.563264c-216.261632 0-391.56224-175.302656-391.56224-391.56224 0-216.261632 175.300608-391.564288 391.56224-391.564288s391.564288 175.301632 391.564288 391.564288C903.563264 728.260608 728.260608 903.563264 511.998976 903.563264z"-->
            <!--p-id="6490"-->
            <!--fill="#707070"-->
            <!--/>-->
            <!--</svg>-->
            <!--{{record.time}}-->
            <!--</span>-->
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
    import {getLocalStorage, getRound, getCenterPoint} from "../utils";
    import IScroll from 'iscroll/build/iscroll-probe';

    function getCurrentRecord({category, id}) {
        let issues = getLocalStorage("issues");
        let records = issues[category] || [];
        return records.find(item => item.id == id) || {};
    }

    function useTouchEvent() {
        let scroller = null;
        let tBound = {}; // title的getBoundingClientRect
        let cBound = {}; // copyTitle的getBoundingClientRect
        let cateBound = {};
        let copyBound = {};

        const elCate = ref(null);
        const elTitle = ref(null);
        const elArticle = ref(null);
        const elCateCopy = ref(null);
        const elTitleCopy = ref(null);


        function handleMove() {
            let {y} = scroller;
            y = Math.abs(y);


            const percent = getRound(Math.min)
            elTitle.value.style.cssText = `opacity: ${1 - percent}; transform: translateY(${-percent * t_max}px)`;
            elTitleCopy.value.style.cssText = `opacity: ${percent}; transform: translate(${-percent * t_x}px, ${-percent * t_max}px)`;

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
            tBound = elTitle.value.getBoundingClientRect();
            cBound = elTitle.value.getBoundingClientRect();
            cateBound = elTitle.value.getBoundingClientRect();
            copyBound = elTitle.value.getBoundingClientRect();

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
            /*overflow: hidden;*/
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
