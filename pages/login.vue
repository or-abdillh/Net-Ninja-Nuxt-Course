<template>
    <NuxtLayout name="auth">
        <section class="mt-6 bg-white p-10 shadow-sm border rounded md:w-5/12">
            <span class="text-center text-green-500">
                <h1 class="text-4xl font-medium mb-2">Welcome Dojo Merch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, libero!</p>
            </span>

            {{ user }}

            <form class="mt-6" @submit.prevent="login">
                <!-- email -->
                <div class="form--wrapper">
                    <label class="form--label" for="email">Email</label>
                    <input v-model="form.email" class="form--input" type="email" name="email" id="email" required placeholder="Type your email here" autocomplete="off">
                </div>

                <!-- password -->
                <div class="form--wrapper">
                    <label class="form--label" for="password">Password</label>
                    <input v-model="form.password" class="form--input" type="password" name="password" id="password" required placeholder="Type your username here" autocomplete="off">
                </div>

                <!-- action -->
                <button ref="button" type="submit" class="btn btn-primary w-full mb-6">Login</button>

                <!-- not have account -->
                <p class="mb-5 text-sm text-gray-500">Not have account ? <button type="button" class="text-green-500" >Click here</button> to register account</p>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">

// composables
const app = useNuxtApp()
const router = useRouter()

// types
type Form = {
  email: string
  password: string
}

// body
const form: Ref<Form> = ref({
  email: 'test@example.com',
  password: 'password'
})

// DOM Element
const button = ref<HTMLButtonElement | null>(null)

// use notyf
const error: any = app.$notyfError
const success: any = app.$notyfSuccess

const user: Ref<any> = ref({})

// form handler
const login = async () => {

  await useFetchApi('/sanctum/csrf-cookie', { method: 'get' })

  const { error } = await useFetchApi('/login', {
    method: 'POST',
    body: form.value
  })

  const { data } = await useFetchApi('/api/user', { method: 'get' })

  user.value = data.value

  console.log(data.value)
}
</script>
