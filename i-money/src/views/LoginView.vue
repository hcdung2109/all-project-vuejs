<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <Logo></Logo>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Login
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          {{ " " }}
        </p>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST"
        @submit.prevent="signIn"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              v-model="email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>

        <p v-if="msgError" class="text-red">{{ msgError }}</p>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Remember me</label
            >
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div>
          <button
            v-if="!isPending"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>

          <button
            v-if="isPending"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Loading..
          </button>

          <p>
            Don't have an account yet?
            <router-link :to="{ name: 'register' }" class="text-sky-500"
              >Register</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default {
  components: { Logo },
  setup() {
    const email = ref("");
    const password = ref("");
    const msgError = ref("");
    const isPending = ref(false);
    const route = useRouter();

    function signIn() {
      isPending.value = true;
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log(data);

          isPending.value = false;
          route.push("/");
        })
        .catch((error) => {
          console.log(error);
          isPending.value = false;

          switch (error.code) {
            case "auth/wrong-password":
              msgError.value = "Incorrect Password";
              break;
            default:
              msgError.value = "Incorrect Email or Password";
              break;
          }
        });
    }

    return { msgError, isPending, email, password, signIn };
  },
};
</script>
