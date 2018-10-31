<template>
	<div class="reg-start gradient">
		<h1 class="title reg-title">Have you registered to vote yet?</h1>
        
        <div class="btns">
            <a class="button is-rounded is-medium" @click="handleYes()">Yes</a>
            <a class="button is-rounded is-medium" @click="handleNo()">No</a>
        </div>
	</div>
</template>

<script>
export default {
    methods: {
        handleYes() {
            this.$router.push({ name: 'signin' })
        },
        handleNo() {
            this.$router.push({ name: 'state' })
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";

.reg-start {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.reg-title {
    width: 70%;
}
.btns {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    .button {
        margin: 15px;
    }
}
</style>


