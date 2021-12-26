<template>
  <div class="main-layout">
    <NavBar/>
    <div class="page-title">
      {{ $route.meta.title }}
    </div>
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  name: 'MainLayout',
  components: {NavBar}
};
</script>

<style scoped>
</style>
