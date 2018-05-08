<template>
  <div class="card p-2 bg-light container">
      <h1>About Us</h1>
      <p>To know more details tap to the links</p>
        <nav class="navbar navbar-expand-md navbar-light">
          <ul class="navbar-nav">
            <router-link to="/history" tag="li"><a class="nav-link">our history</a></router-link>
            <router-link to="/contacts" tag="li"><a class="nav-link">contacts us</a></router-link>
            <router-link to="/ordery-guide" tag="li"><a class="nav-link">ordery guide</a></router-link>
            <router-link to="/delivery" tag="li"><a class="nav-link">delivery</a></router-link>
          </ul>
        </nav>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
