<template>
  <div class="auth-layout">
    <div class="page-title">
      {{ $route.meta.title }}
    </div>
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",

};
</script>

<style scoped>
</style>