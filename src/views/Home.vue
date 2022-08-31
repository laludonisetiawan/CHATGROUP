<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login />
        <P>
          Already have an account?
          <a href="#" @click="showLogin = false">Register here</a>
        </P>
    </div>
    <div v-else>
      <Register />
      <p>
        Already have an account? 
        <a href="#" @click="showLogin = true">Login here</a>
      </p> 
    </div>
  </div>
</template>

<script>
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import {ref} from 'vue'
export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
  setup() {
    const showLogin = ref(true)
    
    return { showLogin }

  }
};
</script>
