import { ref } from "vue";
import { firebase } from "@/configs/firebase";

const msgError = ref(null);
const isPending = ref(false);

async function signUp(email, password) {
  msgError.value = null;
  isPending.value = true;

  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (!response) throw new Error("Not connect firebase");
    return response;
  } catch (error) {
    console.log(error);
    msgError.value = error.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { msgError, isPending, signUp };
}
