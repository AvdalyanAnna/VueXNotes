<template>
  <div v-if="message" class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    message(){
      return this.$store.getters.getError;
    },
  }
}
</script>

<style lang="scss" scoped>
.message{
  text-align: center;
  padding: 20px;
}
p{
  color:#ff0000;
}
</style>