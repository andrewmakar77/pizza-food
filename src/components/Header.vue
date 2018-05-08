<template>
  <header class="row">
      <nav class="navbar navbar-expand-md navbar-light">
          <a href="/" class="navbar-brand">PIZZA FOOD</a>
          <ul class="navbar-nav">
                  <router-link to="/" tag="li"><a class="nav-link">home</a></router-link>
                  <router-link :to="{name:'menuLink'}" tag="li"><a class="nav-link">menu</a></router-link>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    header{
        margin-bottom: 20px;
    }

    .navbar-brand{
        font-size: 2em;
    }
</style>
