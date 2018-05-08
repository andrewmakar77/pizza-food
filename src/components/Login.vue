<template>
  <div class="row">



      <form>
          <p>Logged in as: <br>
         <strong> {{currentUser}}</strong>
          </p>
          <div class="form-group">
              <label for="">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password">
          </div>
          <button class="btn btn-primary"
                  @click.prevent="signIn">Sign in</button>
          <button class="btn btn-danger"
                  @click.prevent="signOut">Sign out</button>
      </form>
  </div>
</template>


<script>
import firebase from 'firebase'
import {store} from '../store/store'




firebase.auth().onAuthStateChanged(function(user){
    if(user){
        store.dispatch('setUser',user)
    }else{
        store.dispatch('setUser',null)
    }
})



export default {
  methods:{
      signIn(){
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode==='auth/wrong-password'){
            alert("Wrong password");
        }
        else{
            alert(errorMessage);
        }
        
});
      },
      signOut(){
        firebase.auth().signOut().then(function() {
            alert("Log out")
        }).catch(function(error) {
            alert(error)
        });
      }
  },
  computed:{
      currentUser(){
          return this.$store.getters.currentUser
      }
  }
}
</script>
