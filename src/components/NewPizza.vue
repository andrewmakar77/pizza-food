<template>
  <form>
      <h3>Add new pizza:</h3>

      <div class="form-group row">
        <label for="" class="col-sm-3">Name</label>
        <div class="col-sm-9">
        <input type="text" v-model="newPizza.name" class="form-control">
        </div>
      </div>
      
      <div class="form-group row">
        <label for="" class="col-sm-3">Description</label>
        <div class="col-sm-9">
        <textarea type="text"  v-model="newPizza.description" class="form-control" rows="5"></textarea>
        </div>
      </div>

      <p><strong>Option 1:</strong></p>

      <div class="form-group row">
        <label for="" class="col-sm-3">Size('')</label>
        <div class="col-sm-9">
        <input type="text"  v-model="newPizza.options[0].size" class="form-control">
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-3">Price</label>
        <div class="col-sm-9">
        <input type="text"   v-model="newPizza.options[0].price" class="form-control">
        </div>
      </div>


    <p><strong>Option 2:</strong></p>

      <div class="form-group row">
        <label for="" class="col-sm-3">Size('')</label>
        <div class="col-sm-9">
        <input type="text"  v-model="newPizza.options[1].size" class="form-control">
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-sm-3">Price</label>
        <div class="col-sm-9">
        <input type="text"   v-model="newPizza.options[1].price" class="form-control">
        </div>
      </div>

    <div class="form-group row">
        <button class="btn btn-success w-100"
                @click.prevent="addToMenuItem">Add</button>
    </div>

  </form>
</template>

<script>
import {dbMenuRef} from '../firebaseConfig'
export default {
  data(){
      return{
          newPizza:{
                'name': 'Margherita',
                'description': 'A delicious tomato based pizza topped with mozzarella',
                'options': [{
                    'size': 9,
                    'price': 6.95
                }, {
                    'size': 12,
                    'price': 10.95
                }]
                }
      }
  },
  methods:{
      addToMenuItem(){
          dbMenuRef.push(this.newPizza);
      }
  }
}
</script>
