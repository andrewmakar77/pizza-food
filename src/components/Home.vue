<template>
  <div class="row">
      <div id="home" class="col-sm-12 text-center">
          <div class="background">
              <h1>Welcome to Pizza FooD</h1>
              <h2>Feeling hungry?</h2>
              <button type="button" class="btn btn-success"
                      @click="goToMenu">Let's order!</button>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  methods:{
      goToMenu(){
          this.$router.push({name:'menuLink'})
      }
  }
}
</script>


<style>
    #home{
        background:url('../assets/pizza.jpg');
        height: 800px;
        padding: 10%;
    }

    h1,h2{
        margin: 6%;
    }

    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 60%;
        margin: 14% auto;
        padding: 20px 0;
    }

</style>
