<template>
  <div id="app">
    <!-- HEADER -->
    <div class="container">
      <app-header></app-header>
    </div>
    <!-- ROUTES -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- INFO BLOCKS -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-12 col-md-4">
            <router-view name="ordery-guide"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
           <router-view name="delivery"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
           <router-view name="history"></router-view>
        </div>

      </div>
    </div>
    <!-- FOOTER -->
    <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</template>



<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {dbMenuRef,dbOrdersRef} from './firebaseConfig'
 
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
  },
  created(){
    this.$store.dispatch('setMenuRef',dbMenuRef)
    this.$store.dispatch('setOrdersRef',dbOrdersRef)
  }
}
</script>




