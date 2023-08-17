<template>
    <header class="sticky top-0 left-0 right-0 z-20">
        <nav class="bg-white shadow-sm flex justify-between px-8 py-6">
            <NuxtLink class="font-semibold text-lg" to="/">Nuxt Dojo Merch</NuxtLink>
            <ul class="flex gap-4 items-center">
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li v-if="!session?.auth"><NuxtLink to="/login" class="btn btn-primary">Login</NuxtLink></li>
                <li v-else><button type="button" @click="logout" class="btn btn-primary">Logout</button></li>
            </ul>
        </nav>
    </header>

    <main class="p-8">
        <slot />
    </main>
</template>

<script setup>

const { session } = await useSession()
const router = useRouter()

const logout = async () => {

    const { data } = await useFetch('/auth/logout', { method: 'PUT' })

    if (data.value) router.push('/login')
}

</script>