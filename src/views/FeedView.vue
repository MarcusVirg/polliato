<template>
	<div class="feed">
		<nav class="level is-mobile search">
			<div class="level-item has-text-centered">
				<div class="control has-icons-left">
					<span class="icon is-left">
						<i class="ion-md-search"></i>
					</span>
					<input v-model="search" class="input is-rounded" type="text" placeholder="Search">
				</div>
			</div>
			<div class="level-item has-text-centered">
				<div class="control filter">
					<div class="select is-rounded">
						<select v-model="current_cand" name="filter" id="filter" placeholder="Candidates">
							<option value="@amyklobuchar">Amy Klobuchar</option>
							<!-- <option v-for="cand in candidates" :key="cand.name" :value="cand.name">{{ cand.name }}</option> -->
						</select>
					</div>
				</div>
			</div>
		</nav>
		<div class="container">
			<div class="sec-type">
				<h1 class="sec-type-header">Candidate Feed</h1>
			</div>
		</div>
		<div class="container" id="tweets-container">
			Latest Tweets:
			<div id="tweets" ref="tweets">
				<Timeline :id="current_cand" :source-type="'profile'" :widget-class="`mt-3 my-custom-class`"/>
			</div>
		</div>
	</div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
	data() {
		return {
			search: '',
			filter: undefined,
			current_cand: 'amyklobuchar'
		}
	},
	computed: {
		candidates() {
			return this.$store.getters.getCandidates
		}
	},
	components: {
		Timeline
	},
	methods: {
		fetchCandidates() {
			this.$store.dispatch('fetchCandidates')
				.then(res =>{
					// eslint-disable-next-line
					console.log(res)
				})
				.catch(err => {
					// eslint-disable-next-line 
					console.log(err)
				})
		}
	}
}

</script>



<style lang="scss" scoped>
@import "@/scss/variables.scss";

.search {
	padding: 10px 0px 10px 5px;
	border-bottom: #0000002e 1px solid;
}
.sec-type-header {
	padding: 20px 0; 
	background-color: $primary;
}
#tweets-container{
	margin-top: 5%;
	overflow: scroll;
}
.level.is-mobile {
	margin: 0;
}
.mt-3 {
	width: 100vw;
}
.filter {
	max-width: 100px;
}
</style>
