<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
const increment = () => {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>
button {
  text-align: center;
  padding: 20px;
}
</style>
