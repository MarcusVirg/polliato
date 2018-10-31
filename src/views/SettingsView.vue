<template>
	<div class="settings-container">
		<div class="container">
			<div class="sec-type">
				<h1 class="sec-type-header">Settings</h1>
			</div>
		</div>
		<div class="accountDiv">
			<h1>ACCOUNT</h1>
			<hr>
			<table class="accountTable">
				<tr>
					<td>
						<b>Username: </b>
					</td>
					<td>
						<b id="usernameField">Sam_Hanson</b>
					</td>
				</tr>
				<tr>
					<td>
						<b>Password: </b>
					</td>
					<td>
						<input type="password" placeholder="********" id="passwordinput">
					</td>
				</tr>
			</table>
			<button class="editButton" onclick="alert('Password changed')">Edit</button>
		</div>

		<div class="notificationsDiv">
			Notifications 
			<button id="notifications" @click="toggleButton()">ON</button>
			<!--<input type="checkbox">-->
		</div>
		<div class="supportbuttons">
			<button class="helpandfeedbackbutton" onclick="alert('email@service.com')">HELP & FEEDBACK</button>
			<br>
			<button class="logoutbutton" @click="logout()">LOGOUT</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$router.push('/')
		},
		toggleButton(){
			var element = document.getElementById('notifications')
			var data = element.innerHTML.toLowerCase()
			if ( data == 'on'){

				element.innerHTML = 'OFF'
				element.style.backgroundColor = 'red'
			}
			else{
				element.innerHTML = 'ON'
				element.style.backgroundColor = 'green'
			}
			//console.log(element)
			//console.log(data)
		}
	}
}
</script>



<style lang="scss">
@import "@/scss/variables.scss";

$maxWidth: 400px;
$percentWidth: 90%;
$backgroundColor: white;

	.settings-container {
		width: 100%;
	}

	.sec-type-header {
		padding: 20px 0;
		background-color: $primary;
		margin-bottom: 10px;
	}

	.headerDiv{
		background-color: $primary;
		color: $secondary;
	}

	#notifications{
		background-color: green;
	}

	hr{
		display: block;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-left: auto;
		margin-right: auto;
		border-style: inset;
		border-width: 1px;
	}

	.accountTable{
		display:inline-block;
		margin: 0 auto;
	}

	#passwordinput{
		pointer-events: auto;
	}

	.accountDiv,.notificationsDiv{
		display: inline-block;
		margin: 0 auto;
		width: $percentWidth;
		max-width: $maxWidth;
		border: grey 0px solid;
		border-radius: 25px;
		padding: 10px;
		margin-bottom:10px;
		box-shadow: 2px 2px 2px 2px grey;
	}

	button{
		width: $percentWidth;
		max-width: $maxWidth;
		border-radius: 25px;
		color: $backgroundColor;
		font-size: 18px;
		font-weight: bolder;
	}

	.editButton{
		background-color: $primary;
		width: 50%;
		color: $secondary;
		border: $backgroundColor;	
	}

	.logoutbutton{
		background-color: red;
		border-color:red;
		&:hover{
			border-color:black;
		}
	}

	.helpandfeedbackbutton{
		border-color: blue;
		background-color: blue;
		margin-bottom: 10px;
		&:hover{
			border-color:$backgroundColor;
		}
	}
</style>
