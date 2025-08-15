<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const terms = ref(false)

const handleRegister = () => {
  if (!terms.value) {
    alert('You must agree to the terms and conditions.')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }

  console.log('Account created:', {
    fullName: fullName.value,
    email: email.value
  })

  router.push('/login')
}
</script>

<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </router-link>
        </p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <input v-model="fullName" id="full-name" name="full-name" type="text" autocomplete="name" required
              placeholder="Full name"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
              text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
              placeholder="Email address"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
              text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <input v-model="password" id="password" name="password" type="password" autocomplete="new-password" required
              placeholder="Password"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
              text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <input v-model="confirmPassword" id="confirm-password" name="confirm-password" type="password"
              autocomplete="new-password" required placeholder="Confirm password"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
              text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div class="flex items-center">
          <input v-model="terms" id="terms" name="terms" type="checkbox" required
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label for="terms" class="ml-2 block text-sm text-gray-900">
            I agree to the
            <a href="#" class="text-indigo-600 hover:text-indigo-500">terms and conditions</a>
          </label>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
            font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
