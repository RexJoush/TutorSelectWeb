<template>
  <div class="main">
    <h1>details {{ applyId }} </h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      applyId: this.$route.params.applyId
    }
  }
}
</script>

<style scoped>

</style>
