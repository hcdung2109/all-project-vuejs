import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const userLogin = ref(null);

projectAuth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    userLogin.value = user;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

function getUser() {
  return userLogin;
}

export function useUser() {
  return { getUser };
}
