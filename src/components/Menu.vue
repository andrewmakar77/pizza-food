<template>
<div>
  <div class="row">
      <div class="col-sm-12 col-md-6">
          <table class="table table-hover">
              <thead class="thead-default">
                <tr>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Add to basket</th>
                </tr>
              </thead>
              <tbody v-for="item in getPizza" :key="item['.key']">
                  <tr>
                      <td><strong>{{item.name}}</strong></td>
                  </tr>
                  <tr v-for="(option,index) in item.options" :key="index">
                      <td>{{option.size}}"</td>
                      <td>{{option.price | currency}}</td>
                      <td><button class="btn btn-sm btn-outline-success"
                            @click="addToBasket(item,option)">+</button></td>
                  </tr>
              </tbody>
          </table>
      </div>

<!-- BASKET -->

        <div class="col-sm-12 col-md-6" v-if="basket.length>0">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>Quantity</th>
                        <th>Pizza</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pizza,index) in basket" :key="index">
                        <td><button class="btn btn-dark btn-sm"
                                    @click="decrease(pizza,index)">-</button>
                            <span>{{pizza.quantity}}</span>
                            <button class="btn btn-dark btn-sm"
                                    @click="increase(pizza)">+</button>
                        </td>
                        <td>{{pizza.name}} {{pizza.size}}"</td>
                        <td>{{pizza.price  * pizza.quantity | currency}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Order total : {{total | currency}}</p>
            <button class="btn btn-success w-100"
                    @click="addNewOrder">Place Order</button>
        </div>
        <div v-else>
            <strong>{{basketText}}</strong>
        </div>
    </div>
</div>
</template>


<script>
import {mapGetters} from 'vuex'
import {dbOrdersRef} from '../firebaseConfig'

export default {
  data(){
      return{
          basket:[],
          basketText:'Your basket is empty!'
      }
  },
  computed:{
      ...mapGetters([
          'getPizza'
      ]),
      total(){
          let totalCost=0
          for(let items in this.basket){
              let individualItem = this.basket[items];
              totalCost+=individualItem.quantity * individualItem.price;
          }
          return totalCost;
      }
  },
  methods:{
      addToBasket(item,option){
          this.basket.push({
              name:item.name,
              price:option.price,
              size:option.size,
              quantity:1
          })
      },
      decrease(pizza,index){
          pizza.quantity--;
          if(pizza.quantity===0){
              this.basket.splice(index,1);
          }
      },
      increase(pizza){
          pizza.quantity++;
      },
      addNewOrder(){
        //   this.$store.commit("addOrder", this.basket);
        dbOrdersRef.push(this.basket)
          this.basket=[];
          this.basketText="Thanks for order"
      }
  }
}
</script>
