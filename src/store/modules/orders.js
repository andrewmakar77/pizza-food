
import {firebaseAction} from 'vuexfire'

const state ={
    orders:[]
}

const getters = {
 getOrders:state=>state.orders,
 numOfOrders : state=>state.orders.length
}

const mutations = {
     addOrder : (state,order)=>{
        state.orders.push(order)
    }
}

const actions = {
    setOrdersRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)
      })
}


export default{
state,
getters,
mutations,
actions
}