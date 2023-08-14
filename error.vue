<template>
    <!-- wrapper -->
    <section class="min-h-screen w-full bg-gray-50 grid place-items-center text-center">
        <section class="p-12 bg-white md:w-4/12 rounded border">
            <h1 class="text-7xl text-green-500 mb-8">{{ error?.statusCode }}</h1>
            <h2 class="text-xl mb-1">Ooops...</h2>
            <p class="mb-8">{{ error?.message }}</p>
            <button @click="clearErrorPage" class="btn btn-primary px-6">Back To Home</button>
        </section>
    </section>
</template>

<script setup>

const props = defineProps({
    error: {
        type: Object
    }
})

const clearErrorPage = () => clearError({ redirect: '/' })

</script>