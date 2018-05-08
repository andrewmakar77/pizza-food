<template>
<div>
  <div class="row">
      <div class="col-sm-12 col-md-6">
        <app-pizza></app-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
          <h3>Menu:</h3>
          <table class="table table-hover">
              <thead>
                  <tr>
                      <th>Item</th>
                      <th>Remove from menu</th>
                  </tr>
              </thead>
              <tbody v-for="(pizza,index) in getPizza" :key="index">
                  <tr>
                      <td>
                          {{pizza.name}}
                      </td>
                      <td>
                          <button class="btn btn-sm btn-outline-danger">x</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>

  <div class="row">
      <div class="col-sm-12">
          <h3>Current orders:</h3>
          <table class="table table-sm">
              <thead>
                  <tr>
                      <th>Item</th>
                      <th>Size</th>
                      <th>Quantity</th>
                      <th>Price</th>
                  </tr>
              </thead>

              <tbody>
                <div class="order-number p-2">
                    <strong><em>Order Number:{{numOfOrders}}</em></strong>
                    <button class="btn btn-sm btn-outline-danger">x</button>
                </div>
                <tr>
                    <td>Margerita</td>
                    <td>9</td>
                    <td>1</td>
                    <td>6.99</td>
                </tr>
              </tbody>
          </table>
      </div>
  </div> 
  <hr>
    <div class="row">
       <div class="col-sm-12 col-md-6">
            <app-login></app-login>
       </div>
    </div>
</div>
</template>


<script>
import NewPizza from './NewPizza'
import Login from './Login'
import { mapGetters} from 'vuex'

export default {
  components:{
      'app-pizza':NewPizza,
      'app-login':Login
  },
    computed:{
      ...mapGetters([
          'numOfOrders',
          'getPizza'
      ])
  },
}
</script>
