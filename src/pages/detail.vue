<template>
	<div class="detail">
		<header class="header border-bottom-1px">
			<span class="back" @click="$router.back">
				<svg
					t="1600335893235"
					class="icon"
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
			<span class="time">
				<svg
					t="1600335929320"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="6488"
					width="18"
					height="18"
				>
					<path
						d="M702.178304 511.314944 512.681984 511.314944l0-245.42208c0-18.556928-9.74848-33.605632-28.305408-33.605632-18.55488 0-28.30336 15.048704-28.30336 33.605632l0 268.510208c0 18.470912 15.050752 33.521664 33.52064 33.521664l212.585472 0c18.556928 0 33.521664-9.749504 33.52064-28.304384C735.699968 521.063424 720.735232 511.314944 702.178304 511.314944z"
						p-id="6489"
						fill="#707070"
					/>
					<path
						d="M511.998976 64.510976C264.865792 64.510976 64.512 264.866816 64.512 512c0 247.131136 200.353792 447.486976 447.486976 447.486976C759.13216 959.486976 959.488 759.131136 959.488 512 959.488 264.866816 759.13216 64.510976 511.998976 64.510976zM511.998976 903.563264c-216.261632 0-391.56224-175.302656-391.56224-391.56224 0-216.261632 175.300608-391.564288 391.56224-391.564288s391.564288 175.301632 391.564288 391.564288C903.563264 728.260608 728.260608 903.563264 511.998976 903.563264z"
						p-id="6490"
						fill="#707070"
					/>
				</svg>
				{{record.time}}
			</span>
			<span class="time">
				<svg
					t="1600336070000"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="8576"
					width="64"
					height="64"
				>
					<path
						d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-0.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75 0.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-0.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291 0.56 3.018 0.567 4.345-0.009l369.758-163.128-369.706-175.464v-0.01c-1.326-0.628-3.158-0.636-4.502 0l-370.108 175.37z m748.015 1.858h0.175-0.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-0.253 47.324 17.746 8.166 17.964 0.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z"
						p-id="8577"
						fill="#707070"
					/>
					<path
						d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z"
						p-id="8578"
						fill="#707070"
					/>
				</svg>
				{{record.category}}
			</span>
		</header>
		<article>
			<h2>{{record.title}}</h2>
			<vue-markdown-it :source="record.content"></vue-markdown-it>
			<div>{{record.content}}</div>
		</article>
	</div>
</template>

<script>
	import { reactive } from "vue";
	import { useRoute } from "vue-router";
	import { getLocalStorage } from "../utils";
	import VueMarkdownIt from "vue3-markdown-it";

	function getCurrentRecord({ category, id }) {
		let issues = getLocalStorage("issues");
		let records = issues[category] || [];
		return records.find(item => item.id == id) || {};
	}

	export default {
        name: "detail",
        components: {
            VueMarkdownIt
        },
		setup() {
			const state = reactive({});
			const { params } = useRoute();
			const record = getCurrentRecord(params);

			record.time = new Date(record.time)
				.toLocaleDateString()
				.replace(/\//g, "-");

			return {
				state,
				record,
				params
			};
		}
	};
</script>

<style scoped lang="less">
	.detail {
		width: 100%;
		height: 100%;
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
			position: absolute;
			box-sizing: border-box;
			align-items: center;
			.back {
				margin-right: 20px;
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
		}
		article {
			padding: 20px;
		}
	}
</style>
