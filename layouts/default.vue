<template>
    <header class="sticky top-0 left-0 right-0">
        <nav class="bg-white shadow-sm flex justify-between px-8 py-6">
            <NuxtLink to="/">Dojo</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <main class="p-8">
        <slot />
    </main>
</template>

<style scoped>

.router-link-exact-active {
    @apply text-green-600 font-medium;
}

</style>