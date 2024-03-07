<template>
  <!-- <NameAnimation/> -->
  <div>
    <h1>Hey! It's me, Odelia.</h1>
    <h2>My pronouns are they/them.</h2>
    <!-- First section: Image with text to the right -->
    <div class="section">
      <img src="@/assets/me.jpg" alt="Image 1" class="image">
      <div class="text">
        <h2>Basically...</h2>
        <p>I'm a software engineer and I love to create things. I'm currently writing my master's thesis on bias mitigation within Automatic Speech
          Recognition models and datasets. I'm also a huge fan of open source and I love to contribute to projects.
          I'm currently learning Vue 3 and I'm excited to share my journey with you.</p>
      </div>
    </div>

    <hr>

    <!-- Second section: Image with text to the left -->
    <div class="section">
      <div class="text">
        <h2>Text Title 2</h2>
        <p>I am a Chinese-American living in the city of Copenhagen, Denmark. I love to boulder, be creative and go to flea markets. I spend a lot of time with my friends, from making cute dinners to attending protests for climate change and the end of genocide</p>
      </div>
      <img src="@/assets/IMG_0490.png" alt="Image 2" class="image">
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
h1 {
  font-family: 'Boohong', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 3.2em;
  line-height: 1.1;
  /* Add other styles for h1 elements if needed */
}


p {
  font-family: 'Nunito', sans-serif;
  font-size: 1.6em;
  line-height: 1.6;
}

button {
  text-align: center;
  padding: 20px;
  background-color: #ce4993;
}

.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.image {
  max-width: 25%; /* Ensure the image resizes based on its container */
  height: auto;
  margin: 10px
}

.text {
  width: 70%; /* Adjust the width as per your design */
}


@media (max-width: 768px) {
  .section {
    flex-direction: column;
  }

  .image,
  .text {
    width: 100%;
  }
}
</style>
