import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
import { async } from "@firebase/util";

const error = ref(null);

const register = async (name, email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if(!res) {
        throw new Error ('could not complete the signup')
    }

    await res.user.updateProfile({
        displayName: name
    })

    error.value = null
    return res
  } catch (error) {
    console.log(error.message)
    error.value = error.message
  }
};

const useRegister = () => {
  return { error, register };
};

export default useRegister;
