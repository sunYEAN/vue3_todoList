<template>
	<div class="home">
		<div class="news">
			<span class="touch-event">
				<svg
					@click="showSideBar"
					t="1600311112905"
					class="icon icon-menu"
					viewBox="0 0 1194 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="3070"
					width="64"
					height="64"
				>
					<path
						d="M1185.060001 1012.461453a30.619849 30.619849 0 0 1-24.537944 11.532833H34.177851a30.619849 30.619849 0 0 1-24.537944-11.532833c-6.485028-7.834615-9.639907-17.527103-9.639906-29.340371v-88.914992c0-11.865849 3.154879-21.593391 9.639906-29.357897a30.391996 30.391996 0 0 1 24.537944-11.515307h1126.37926a30.391996 30.391996 0 0 1 24.537944 11.515307c6.485028 7.764507 9.639907 17.527103 9.639907 29.357897v88.914992c-0.035054 11.848321-3.189933 21.505755-9.674961 29.340371z m-24.537944-415.12943H34.177851a30.479632 30.479632 0 0 1-24.537944-11.602942C3.207461 578.05221 0.052582 568.324668 0.052582 556.458819v-88.914992C0.052582 455.713033 3.207461 445.950436 9.692489 438.18593a30.391996 30.391996 0 0 1 24.537943-11.515307h1126.326679a30.391996 30.391996 0 0 1 24.537944 11.515307c6.309757 7.589236 9.464636 17.527103 9.639907 29.357897v88.914992c0 11.865849-3.154879 21.593391-9.639907 29.270262a30.479632 30.479632 0 0 1-24.537944 11.602942z m0-426.662263H34.177851a30.216725 30.216725 0 0 1-24.537944-11.602942C3.207461 151.302312 0.052582 141.662405 0.052582 129.796557V40.881564C0.052582 29.015716 3.207461 19.288173 9.692489 11.523667A30.391996 30.391996 0 0 1 34.177851 0.00836h1126.37926a30.391996 30.391996 0 0 1 24.537944 11.515307c6.485028 7.764507 9.639907 17.527103 9.639907 29.357897v88.914993c0 11.865849-3.154879 21.505755-9.639907 29.270261a30.234252 30.234252 0 0 1-24.537944 11.602942z"
						p-id="3071"
						fill="#8a8a8a"
					/>
				</svg>
			</span>
			<h3>{{state.category || '最新'}}</h3>
			<div class="sort-method">
				<span class="touch-event">
					<svg
						t="1600312769711"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="4011"
						width="64"
						height="64"
					>
						<path
							d="M512 953.344C268.288 953.344 70.656 755.712 70.656 512S268.288 70.656 512 70.656 953.344 268.288 953.344 512c0 244.736-197.632 441.344-441.344 441.344zM512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S795.648 0 512 0z"
							p-id="4012"
							fill="#515151"
						/>
						<path
							d="M577.536 265.216c0-14.336 11.264-26.624 26.624-26.624h25.6c14.336 0 24.576 11.264 25.6 24.576L794.624 409.6a25.958 25.958 0 0 1 0 36.864l-18.432 18.432a25.958 25.958 0 0 1-36.864 0l-82.944-87.04v355.328c0 14.336-11.264 26.624-26.624 26.624h-25.6c-14.336 0-26.624-11.264-26.624-26.624V265.216zM446.464 758.784c0 14.336-11.264 26.624-26.624 26.624h-25.6c-14.336 0-24.576-11.264-25.6-24.576L229.376 614.4a25.958 25.958 0 0 1 0-36.864l18.432-18.432a25.958 25.958 0 0 1 36.864 0l82.944 87.04V289.792c0-14.336 11.264-26.624 26.624-26.624h25.6c14.336 0 26.624 11.264 26.624 26.624v468.992z m0 0"
							p-id="4013"
							fill="#515151"
						/>
					</svg>
				</span>
				<span class="touch-event">
					<svg
						t="1600312803978"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="4850"
						width="64"
						height="64"
					>
						<path
							d="M265.1 509.8c-0.1 45.5-36.8 82.2-82.4 82.1-45.4-0.1-82.3-37-82.2-82.5 0-45.3 37.1-82.2 82.6-82.1 45.4 0.1 82 36.9 82 82.5z m577-82.4c45.5 0 82.5 36.8 82.5 82.2 0.1 45.4-36.8 82.4-82.3 82.4-45.6 0-82.4-36.6-82.4-82.2s36.6-82.4 82.2-82.4zM512.4 592c-45.4 0-82.6-37.3-82.4-82.4 0.3-45.5 37.1-82.2 82.6-82.2 45.4 0 82.5 37.1 82.3 82.4-0.1 45.4-37 82.2-82.5 82.2z"
							p-id="4851"
							fill="#515151"
						/>
					</svg>
				</span>
			</div>
		</div>

		<div class="input-wrap" v-if="state.category">
			<label>
				<input v-model="state.title" type="text" :placeholder="'Add Issue To ' + state.category" />
			</label>
			<i class="icon save" :class="[]" @click="addRecord(state.category)">save</i>
		</div>

		<card
			v-for="i in cateRecords"
			@onselected="handleSelected"
			:showDetail="true"
			:item="i"
			:key="i.id"
		/>
		<side-bar :onCategorySelected="handleCategorySelected" v-model:visible="visible" />
	</div>
</template>

<script>
	import { ref, computed, reactive } from "vue";
	import { useRouter } from "vue-router";
	import { getLocalStorage, setLocalStorage } from "../utils";
	import Card from "../components/Card";
	import SideBar from "../components/SideBar";

	const issues_name = "issues";
	const record_id = "recordId";

	// // sidebar相关逻辑
	function useHandleSideBar() {
		let visible = ref(false);

		const showSideBar = function() {
			visible.value = true;
		};

		const hideSideBar = function() {
			visible.value = false;
		};

		return {
			visible,
			hideSideBar,
			showSideBar
		};
	}

	function useHomeData() {
		let _r_id = getLocalStorage("recordId") || 0;
		let _issues = getLocalStorage(issues_name); // 本地的文章

		let state = reactive({
			id: _r_id,
			title: "", // 新增时的名字
			issues: _issues || {}, // state中的文章  //  issues = {Vue: [], HTTP: []}
			category: "" // 分类
		});
		// 设置当前展示的分类
		function setCategory(cate) {
			state.category = cate;
		}

		// 增加一篇文章
		function addRecord(category) {
			// 当前分类已有的文章
			if (!state.issues[category]) state.issues[category] = [];
			state.issues[category].unshift({
				id: ++state.id,
				time: Date.now(),
				title: state.title,
				category,
				content: ""
			});
			setLocalStorage(record_id, state.id);
			setLocalStorage(issues_name, state.issues);
		}

		//
		function getRecordsByTime(category) {
			let records = state.issues[category] || [];
			if (category) return records.sort((a, b) => b.id - a.id);
			for (let i in state.issues) {
				records.push(...state.issues[i]);
			}
			return records.sort((a, b) => b.id - a.id);
		}

		const cateRecords = computed(() => {
			// 没有分类 -> 默认最新发布
			return getRecordsByTime(state.category);
		});

		return {
			state,
			addRecord,
			setCategory,
			cateRecords
		};
	}

	export default {
		name: "home",
		components: { Card, SideBar },
		setup() {
			const { visible, showSideBar, hideSideBar } = useHandleSideBar();
			const { state, cateRecords, setCategory, addRecord } = useHomeData();
			const router = useRouter();

			function handleCategorySelected(item) {
				setCategory(item.name);
				hideSideBar();
			}

			function handleSelected(item) {
				router.push(`/detail/${item.category}/${item.id}`);
			}

			return {
				state,
				visible,
				addRecord,
				cateRecords,
				showSideBar,
				hideSideBar,
				setCategory,
				handleSelected,
				handleCategorySelected
			};
		}
	};
</script>

<style scoped lang="less">
	.home {
		.news {
			color: #454647;
			padding: 20px;
			display: flex;
			position: relative;
			font-size: 20px;
			align-items: center;
			padding-right: 100px;
			> .touch-event {
				margin-right: 10px;
			}
			.icon-menu {
				transform: scale(0.8);
			}
			.sort-method {
				top: 50%;
				right: 0;
				width: 100px;
				display: flex;
				position: absolute;
				transform: translateY(-50%);
				box-sizing: border-box;
				padding-right: 20px;
				justify-content: flex-end;
				.touch-event {
					margin-left: 10px;
				}
			}
		}
		.input-wrap {
			width: calc(100% - 40px);
			height: 40px;
			margin: 10px auto;
			position: relative;
			label {
				width: 100%;
				height: 100%;
				display: block;
				background-color: #e9e9e9;
				input {
					width: 100%;
					height: 100%;
					padding: 10px;
					border: none;
					box-sizing: border-box;
					border-radius: 4px;
					padding-right: 80px;
					background-color: transparent;
				}
			}
			.icon {
				top: 0;
				width: 60px;
				right: 0;
				color: #a0a0a0;
				height: 100%;
				position: absolute;
				text-align: center;
				line-height: 40px;
				&.active {
					color: #333;
				}
			}
		}
	}
</style>
