<template>
	<div class="make-account gradient">
		<h1 class="acc-title title">Make an account</h1>
        <div class="signup">
            <div class="field">
                <div class="control has-icons-left">
                    <input
                        v-model="user.username"
                        ref="username"
                        class="input is-rounded"
                        type="text"
                        placeholder="Enter Username"
                        @focus="resetClass($refs.username)"
                        required>
                    <span class="icon is-small is-left">
                        <i class="ion-md-person"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left">
                    <input
                        v-model="user.name"
                        ref="name"
                        class="input is-rounded"
                        type="text"
                        placeholder="Enter Full Name"
                        @focus="resetClass($refs.name)"
                        required>
                    <span class="icon is-small is-left">
                        <i class="ion-md-person"></i>
                    </span>
                </div>
            </div>

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

            <div class="field">
                <div class="control has-icons-left">
                    <input
                        v-model="user.conPassword"
                        ref="conpass"
                        class="input is-rounded"
                        type="password"
                        placeholder="Confirm Password"
                        @focus="resetClass($refs.conpass)"
                        required>
                    <span class="icon is-small is-left">
                        <i class="ion-md-lock"></i>
                    </span>
                </div>
            </div>
        </div>
        <a class="button is-rounded btn-create" @click="validate()">Create Account</a>
	</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                name: '',
                email: '',
                password: '',
                conPassword: ''
            }
        }
    },
    methods: {
        validate() {
            if(!this.$refs.name.validity.valid) {
                this.$refs.name.classList.add('is-danger')
                return
            }
            if(!this.$refs.email.validity.valid) {
                this.$refs.email.classList.add('is-danger')
                return
            }
            if(!this.$refs.password.validity.valid) {
                this.$refs.password.classList.add('is-danger')
                return
            }
            if(!this.$refs.conpass.validity.valid) {
                this.$refs.conpass.classList.add('is-danger')
                return
            }

            this.signUp()
        },
        resetClass(elem) {
            elem.classList.remove('is-danger')
        },
        signUp() {
            this.$store.dispatch('signUp', this.user)
                .then(() => {
                    this.$router.push({name: 'feed'})
                })
                .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                    alert('There was an error while signing up')
                })
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";

.make-account {
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
.btn-create {
    bottom: 50px;
    position: fixed;
}
</style>
