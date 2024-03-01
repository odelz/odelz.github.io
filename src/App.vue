<template>
    <!-- Static Navigation Bar -->
    <NavBar />
    <router-view/>
</template>
<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>


<style scoped>
/* Add styling for your navigation bar */
.nav-bar {
  background-color: #333;
  color: white;
  padding: 10px;
}

.nav-bar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

.nav-bar a:hover {
  text-decoration: underline;
}
</style>

