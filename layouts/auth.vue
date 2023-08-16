<template>
    <header class="sticky top-0 left-0 right-0 z-20">
        <nav class="bg-white shadow-sm flex justify-between px-8 py-6">
            <p class="font-semibold text-lg text-green-500" to="/">Nuxt Dojo Merch</p>
        </nav>
    </header>
    
    <main class="bg-gray-50 p-8 grid place-items-center">
        <slot />
    </main>
</template>