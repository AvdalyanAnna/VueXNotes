<template>
  <div class="wrapper">
    <!--    <header></header>-->
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <router-link to="/">VUE Notes</router-link>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
    <!--  <footer></footer>-->
  </div>
</template>


<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
