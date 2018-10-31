<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchBallot')
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      })
  }
}
</script>


<style lang="scss">
@import "@/scss/variables.scss";

#app {
  font-family: 'Rubik Mono One', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

.gradient {
  background: linear-gradient(180deg, #FCBB6D 13.17%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F50E29 26.72%, rgba(244, 17, 44, 0) 73.09%), linear-gradient(180deg, #AB6C82 20.91%, rgba(171, 108, 130, 0) 40.03%), linear-gradient(180deg, #685D79 60.32%, rgba(104, 93, 121, 0) 76.27%), #475C7A;
}
</style>
