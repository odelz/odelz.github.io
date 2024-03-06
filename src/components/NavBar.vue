<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/todolist">To Do List</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
nav {
    background-color: #ee5d6c;
    padding: 10px;
    
}

ul {
    
    list-style-type: none;
    margin: 5px;
    padding: 0;
}

li {
    display: inline;
    margin-right: 50px;
    
  
}

a {
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    color: #FFFFFF;
}
</style>
