<template>
	<div class="main">
        <router-view />

        <div id="nav" class="columns is-gapless is-mobile">
            <div class="column nav-item">
                <router-link to="/ballot">
                    <i class="ion-md-filing is-medium"></i>
                </router-link>
            </div>
            <div class="column nav-item">
                <router-link to="/mainpage">
                    <i class="ion-md-radio is-medium"></i>
                </router-link>
            </div>
            <div class="column nav-item">
                <router-link to="/settings">
                    <i class="ion-md-settings is-medium"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#nav {
  a {
    font-weight: bold;
    color: $secondary;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active {
      background-color: $primary;
      border-bottom: $accent 3px solid;
      transition: 0.3s ease
    }
  }
  background-color: #475C7A;
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.nav-item {
    height: 60px;
    position:initial;
}
i {
    color: white;
    font-size: 2em;
}
.btn {
    color: $primary;
}
</style>

