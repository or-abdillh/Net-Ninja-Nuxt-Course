<template>
    <NuxtLayout name="auth">
        <section class="mt-6 bg-white p-10 shadow-sm border rounded md:w-5/12">
            <span class="text-center text-green-500">
                <h1 class="text-4xl font-medium mb-2">Welcome Dojo Merch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, libero!</p>
            </span>

            <form class="mt-6" @submit.prevent="login">
                <!-- username -->
                <div class="form--wrapper">
                    <label class="form--label" for="username">Username</label>
                    <input v-model="username" class="form--input" type="text" name="username" id="username" required placeholder="Type your username here">
                </div>

                <!-- password -->
                <div class="form--wrapper">
                    <label class="form--label" for="password">Password</label>
                    <input v-model="password" class="form--input" type="password" name="password" id="password" required placeholder="Type your username here">
                </div>

                <!-- action -->
                <button ref="btnSubmit" type="submit" class="btn btn-primary w-full mb-6">Login</button>

                <!-- not have account -->
                <p class="mb-5 text-sm text-gray-500">Not have account ? <button @click="getRandomUser" type="button" class="text-green-500" >Click here</button> to get random user credential</p>
            </form>
        </section>
    </NuxtLayout>
</template>

<script setup>

const username = ref('')
const password = ref('')
const btnSubmit = ref(null)

// form handler
const login = async () => {

    // disabled submit button
    btnSubmit.value.innerText = 'Please wait ...'
    btnSubmit.value.disabled = true

    // try to login
    await useFetch('/api/users/login', {
        method: 'POST',
        body: {
            username: username.value,
            password: password.value
        }
    })

    // enabled
    btnSubmit.value.innerText = 'Login'
    btnSubmit.value.disabled = false
}

// randoming user
const getRandomUser = async evt => {

    evt.target.innerText = 'getting ...'
    evt.target.disabled = true

    const { data: users } = await useFetch('/api/users')

    // get random index
    const index = Math.floor( Math.random() * users.value.length )

    const user = users.value[index]

    // auto fill
    username.value = user.username
    password.value = user.password

    evt.target.innerText = 'Click here'
    evt.target.disabled = false
}

</script>