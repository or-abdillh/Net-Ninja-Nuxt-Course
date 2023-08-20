<template>
    <header class="sticky top-0 left-0 right-0 z-20">
        <nav class="bg-white shadow-sm flex justify-between items-center px-8 py-6">
            <NuxtLink class="font-semibold text-lg" to="/">Nuxt Dojo Merch</NuxtLink>
            <ul :class="isSidebar ? 'right-0' : '-right-full'" class="flex flex-col md:flex-row gap-4 items-end md:items-center p-8 md:p-0 fixed md:static top-20 bottom-0 bg-white duration-300 ease-in">
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
                <li v-if="!session?.auth"><NuxtLink to="/login" class="btn btn-primary">Login</NuxtLink></li>
                <li v-else><button type="button" @click="logout" class="btn btn-primary">Logout</button></li>
            </ul>
            <!-- sidebar toggler -->
            <button @click="isSidebar = !isSidebar" class="btn md:hidden text-green-500"><i class="fa-solid" :class="isSidebar ? 'fa-times' : 'fa-bars'"></i></button>
        </nav>
    </header>

    <main class="p-8">
        <slot />
    </main>
</template>

<script setup lang="ts">

const { session } = await useSession()
const router = useRouter()

const isSidebar: Ref<boolean> = ref(false)

const logout = async () => {

    const { data } = await useFetch('/auth/logout', { method: 'PUT' })

    if (data.value) router.push('/login')
}

</script>