<template>
	<div class="signin gradient">
		<h1 class="acc-title title">Sign In</h1>
        <div class="signup">
            <div class="field">
                <div class="control has-icons-left">
                    <input
                        v-model="user.email"
                        ref="email"
                        class="input is-rounded"
                        type="email"
                        placeholder="Enter Email"
                        @focus="resetClass($refs.email)"
                        required>
                    <span class="icon is-small is-left">
                        <i class="ion-md-mail"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <div class="control has-icons-left">
                    <input
                        v-model="user.password"
                        ref="password"
                        class="input is-rounded"
                        type="password"
                        placeholder="Enter Password"
                        @focus="resetClass($refs.password)"
                        required>
                    <span class="icon is-small is-left">
                        <i class="ion-md-lock"></i>
                    </span>
                </div>
            </div>
        </div>

        <a class="button is-rounded btn-login" @click="login()">Login</a>
	
        <p class="no-account"> Don't have an account?
            <a @click="signup()"> Sign Up! </a>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$router.push({ name: 'feed' })
		},
		signup() {
			this.$router.push({ name: 'signup' })
		},
        resetClass(elem) {
            elem.classList.remove('is-danger')
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";

.signin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
}
.acc-title {
    padding: 10% 10px;
}
.signup {
    max-width: 50%;
}
.btn-login {
    margin-top: 25px;
}
.no-account {
    bottom: 50px;
    position: fixed;
}
</style>
