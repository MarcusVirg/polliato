<template>
    <div class="reg-start gradient">
        <h1 class="title reg-title">Are you a US citizen and will be at least 18 by the next election?</h1> 
        
        <div class="btns">
            <a class="button is-rounded is-medium" @click="toRegister()">Yes</a>
            <a class="button is-rounded is-medium" @click="toInvalid()">No</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toRegister() {
            this.$router.push({ name: 'form' })
        },
        toInvalid() {
            this.$router.push({ name: 'invalid' })
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
.reg-title {
    margin-top: 25%;
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