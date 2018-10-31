<template>
    <div class="reg-start gradient">
        <h1 class="title reg-title">Register to vote in your state</h1> 
        
        <div class="btns">
            <a class="button is-rounded is-medium" @click="toPrereq()">Minnesota</a>
            
            <h1>Not your state?</h1>
            
            <select name="state"> <option value="alabama">Alabama</option>
                       <option value="alaska">Alaska</option>
                       <option value="arizona">Arizona</option>
                       <option value="arkansas">Arkansas</option>
                       <option value="california">California</option>
                       <option value="colorado">Colorado</option>
                       <option value="connecticut">Connecticut</option>
                       <option value="delaware">Delaware</option>
                       <option value="florida">Florida</option>
                       <option value="georgia">Georgia</option>
                       <option value="hawaii">Hawaii</option>
                       <option value="idaho">Idaho</option>
                       <option value="illinois">Illinois</option>
                       <option value="indiana">Indiana</option>
                       <option value="iowa">Iowa</option>
                       <option value="kansas">Kansas</option>
                       <option value="kentucky">Kentucky</option>
                       <option value="louisiana">Louisiana</option>
                       <option value="maine">Maine</option>
                       <option value="maryland">Maryland</option>
                       <option value="massachusetts">Massachusetts</option>
                       <option value="michigan">Michigan</option>
                       <option value="minnesota">Minnesota</option>
                       <option value="mississippi">Mississippi</option>
                       <option value="missouri">Missouri</option>
                       <option value="montana">Montana</option>
                       <option value="nebraska">Nebraska</option>
                       <option value="nevada">Nevada</option>
                       <option value="newhampshire">New Hampshire</option>
                       <option value="newjersey">New Jersey</option>
                       <option value="newmexico">New Mexico</option>
                       <option value="newyork">New York</option>
                       <option value="northcarolina">North Carolina</option>
                       <option value="northdakota">North Dakota</option>
                       <option value="ohio">Ohio</option>
                       <option value="oklahoma">Oklahoma</option>
                       <option value="oregon">Oregon</option>
                       <option value="pennsylvania">Pennsylvania</option>
                       <option value="rhodeisland">Rhode Island</option>
                       <option value="southcarolina">South Carolina</option>
                       <option value="southdakota">South Dakota</option>
                       <option value="tennessee">Tennessee</option>
                       <option value="texas">Texas</option>
                       <option value="utah">Utah</option>
                       <option value="vermont">Vermont</option>
                       <option value="virginia">Virginia</option>
                       <option value="washington">Washington</option>
                       <option value="westvirginia">West Virgina</option>
                       <option value="wisconsin">Wisconsin</option>
                       <option value="wyoming">Wyoming</option>
          </select>
          <a class="button is-rounded is-medium" @click="toPrereq()">Submit</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toPrereq() {
            this.$router.push({ name: 'prereq' })
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
