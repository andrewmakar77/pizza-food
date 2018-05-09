<template>
<div>
<section v-if="currentUser" >
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
              <tbody v-for="pizza in getPizza" :key="pizza['.key']">
                  <tr>
                      <td>
                          {{pizza.name}}
                      </td>
                      <td>
                          <button class="btn btn-sm btn-outline-danger"
                          @click="removeMenuItem(pizza['.key'])">x</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>

  <div class="row">
      <div class="col-sm-12">
          <h3>Current orders:{{numOfOrders}}</h3>
          <table class="table table-sm" v-for="(orders,index) in getOrders" :key="orders['.key']" >
              <thead class="bg-light">
                  <tr>
                      <th>Item</th>
                      <th>Size</th>
                      <th>Quantity</th>
                      <th>Price</th>
                  </tr>
              </thead>

              <tbody>
                <div class="order-number p-2">
                    <strong><em>Order Number:{{index +1}}</em></strong>
                    <button class="btn btn-sm btn-outline-danger"
                    @click="removeOrdersItem(orders['.key'])">x</button>
                </div>
                <tr v-for="(orderItems,index) in orders['.value']" :key="index" >
                    <td>{{orderItems.name}}</td>
                    <td>{{orderItems.size}}"</td>
                    <td>{{orderItems.quantity}}</td>
                    <td>{{orderItems.price | currency}}</td>
                </tr>
              </tbody>
          </table>
      </div>
  </div> 
</section>
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
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig'

export default {
  components:{
      'app-pizza':NewPizza,
      'app-login':Login
  },
    computed:{
      ...mapGetters([
          'numOfOrders',
          'getPizza',
          'getOrders',
          'currentUser'
      ])
  },
  methods:{
      removeMenuItem(key){
          dbMenuRef.child(key).remove()
      },
     removeOrdersItem(key){
          dbOrdersRef.child(key).remove()
      }
  }
}
</script>
