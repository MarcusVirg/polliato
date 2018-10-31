<template>
    <div class = "form">
        
        <!-- Name input section -->
        <h1>Username</h1>
        <input v-model="form_user.username" class="input is-rounded" type="text" placeholder="User Name" id="usernameinput">

        <h1>Email</h1>
        <input v-model="form_user.email" class="input is-rounded" type="email" placeholder="youremail@domain.com" id="emailinput">

        <h1>Password</h1>
        <input v-model="form_user.password" class="input is-rounded" type="password" placeholder="Password" id="passwordinput">

        <h1>Confirm Password</h1>
        <input v-model="form_user.confirm_password" class="input is-rounded" type="password" placeholder="Confirm Password" id="cpasswordinput">

        <h1>First Name</h1>
        <input v-model="form_user.first_name" class="input is-rounded" type="text" placeholder="First Name" id="firstnameinput">

        <h1>Middle Name</h1>
        <input v-model="form_user.middle_name" class="input is-rounded" type="text" placeholder="Middle Name" id="middlenameinput">

        <h1>Last Name</h1>
        <input v-model="form_user.last_name" class="input is-rounded" type="text" placeholder="Last Name" id="lastnameinput">

        <h1>Suffix (Jr,Sr...)</h1>
        <input class="input is-rounded" type="text" placeholder="Suffix" id="suffixinput">
    
        <h1>Birthdate</h1>
        <input v-model="form_user.dob" class="input is-rounded" type="date" placeholder="MM/DD/YYYY" id="birthdayinput">

        <h1>Address</h1>
        <input v-model="form_user.address" class="input is-rounded" type="text" placeholder="Address" id="addressinput">

        <table>
            <tr>
                <td>
                    <h1>City</h1>
                    <input v-model="form_user.city" class="input is-rounded" type="text" placeholder="Boston" id="cityinput">
                </td>
                <td>
                    <h1>ZIP Code</h1>
                    <input v-model="form_user.zip" class="input is-rounded" type="number" placeholder="12345" id="zipcodeinput">
                </td>
            </tr>
        </table>

        <h1>Apt. Number</h1>
        <input class="input is-rounded" type="text" placeholder="100" id="aptnumberinput">

        <h1>Drivers License Number</h1>
        <input v-model="form_user.license_num" class="input is-rounded" type="text" id="driverslicenseinput">
        <h1>Last 4 Digits of SSN</h1>
        <input v-model="form_user.ssn" class="input is-rounded" type="number" placeholder="0000" id="ssninput">
        <h1>I don't have a drivers license, MN ID card, or social security number</h1>
        <input type="checkbox" id="noIdnumber">
        <br>
        <a class="button" @click="register()">Submit</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form_user: {
                username: '',
                email: '',
                password: '',
                confirm_password: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                dob: '',
                address: '',
                city: '',
                zip: '',
                license_num: '',
                ssn: ''
            }
        }
    },
    methods: {
        register() {
            this.$store.dispatch('signUp', {
                username: this.form_user.username,
                email: this.form_user.email,
                password: this.form_user.password,
                name: this.form_user.first_name + ' ' + this.form_user.last_name,
                dob: this.form_user.dob,
                address: `${this.form_user.address} ${this.form_user.city} MN ${this.form_user.zip}`,
                license_num: this.form_user.license_num,
                ssn: this.form_user.ssn
            }).then(() => {
                this.$router.push('/mainpage')
            }).catch(err => {
                //eslint-disable-next-line
                console.log(err)
                //eslint-disable-next-line
                alert('There was a problem while registering')
                this.$router.push('/mainpage')
            })
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/scss/variables.scss";
    .form {
        margin: 25px auto;
        max-width: 350px;
    }

    h1 {
        margin-top: 15px;
    }

    input{
        display: inline-block;
        width: 80%;
        margin-bottom: 15px;
    }

    table{
        margin-left: 10%;
        display: inline-block;
    }

    #noIdnumber{
        display: inline-block;
        display: 0 auto;
    }

</style>
