<template>
	<div class="ballot">
		<nav class="level is-mobile search">
			<div class="level-item has-text-centered">
				<div class="control has-icons-left">
					<span class="icon is-left">
						<i class="ion-md-search"></i>
					</span>
					<input v-model="search" class="input is-rounded" type="text" placeholder="Search">
				</div>
			</div>
		</nav>
		<div class="container">
			<div class="sec-type">
				<h1 class="sec-type-header">Official Ballot</h1>
				<div v-for="contest in ballot" :key="contest.id" class="box office">
					<h3 class="office-header">{{ contest.office }}</h3>
					<div class="control">
						<div v-for="candidate in contest.candidates" :key="candidate.id" class="candidates">
							<label class="radio">
								<input type="radio" :name="contest.office">
								<div class="candidate">
									{{ candidate.name }}
									<div class="party">{{ candidate.party.toLowerCase() }}</div>
								</div>
							</label>
							<a class="button is-primary is-rounded" @click="viewCandidate(candidate.name)">View</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			filter: undefined
		}
	},
	computed: {
		ballot() {
			return this.$store.getters.getBallot
		}
	},
	methods: {
		viewCandidate(name) {
			this.$router.push(`/candidate/${name}`)
		}
	}
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";

.search {
	padding: 10px 0px 10px 5px;
	border-bottom: #0000002e 1px solid;
	width: 100%;
	.control {
		width: 100%;
	}
}
.level.is-mobile {
	margin-bottom: 0rem;
}
.radio {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.office {
	margin: 15px;
}
.office-header {
	width: 100%;
	font-size: 12px;
	color: $primary;
	border-bottom: 1px black solid;
}
.candidates {
	font-family: 'Lato', Helvetica, Arial, sans-serif;
	font-size: 16px;
	text-transform: capitalize;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0px;
}
.candidate {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 15px;
}
.party {
	display: flex;
	justify-content: flex-start;
	font-size: 14px;
}
.box {
	border-radius: 15px;
}
.sec-type {
	margin-bottom: 85px;
}
.sec-type-header {
	padding: 20px 0;
	background-color: $primary;
}
</style>
