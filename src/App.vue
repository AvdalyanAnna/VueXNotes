<template>
  <div class="wrappeer">
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

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
