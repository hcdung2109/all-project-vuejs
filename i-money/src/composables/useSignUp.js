import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullname) {
    await projectAuth.createUserWithEmailAndPassword(email, password);
}

//export function 
