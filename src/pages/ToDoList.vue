<!-- to do list manager -->
<template>
  <div>
    <h1>To Do List</h1>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const newItem = ref('')
const items = ref(['Learn Vue 3', 'Create a project', 'Deploy it'])

function addItem() {
  items.value.push(newItem.value)
  newItem.value = ''
}

function removeItem(index: number) {
  items.value.splice(index, 1)
}



</script>

<!-- Include the styles if needed -->
<style scoped>
/* Add your custom CSS styles here */
</style>
