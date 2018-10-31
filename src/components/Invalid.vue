<template>
	<div class="reg-start gradient">
		<h1 class="title reg-title">You must be 18 or older to register</h1>
        
        <p class="invalid"> You can still sign up for Polliato
            <a @click="signup()"> Here </a>
        </p>
	</div>
</template>

<script>
export default {
    methods: {
        signup() {
			this.$router.push({ name: 'signin' })
		}
    }
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";

.reg-start {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.reg-title, .invalid {
    margin-top: 25%;
    width: 75%;
}
.btns {
    display: flex;
    flex-direction: column;
    margin-top: 25%;
    font-weight: 600;
    .button {
        margin: 15px;
    }
}
</style>


