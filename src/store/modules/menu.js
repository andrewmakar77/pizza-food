import { firebaseAction } from 'vuexfire'

const state ={
    menuItems:[]
}

const getters = {
    getPizza : state=>state.menuItems
}

const mutations = {

}

const actions = {
     setMenuRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('menuItems', ref)
      })
}


export default{
    state,
    getters,
    mutations,
    actions
}