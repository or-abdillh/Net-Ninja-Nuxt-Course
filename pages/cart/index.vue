<template>
    <NuxtLayout name="default">
        <h1 class="text-2xl text-green-500">Your Carts</h1>
        <p class="mb-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facere fugiat, fugit nobis facilis nihil ex magnam, nostrum quo qui rem? Voluptatibus incidunt itaque rem assumenda quaerat eligendi dolorem fugiat.</p>
        <template v-for="cart in carts" :key="cart">
            <!-- card -->
            <div class="w-full p-4 rounded border mb-3 bg-white grid grid-cols-2 justify-between">
                <span>
                    <NuxtLink :to="`/products/${ cart.productId }`" class="text-xl">{{ cart.title }}</NuxtLink>
                    <p>{{ cart.quantity }} item</p>
                </span>
                <span class="text-right">
                    <p class="text-lg text-green-500">
                        <i class="fa-solid fa-dollar"></i>
                        {{ cart.price * cart.quantity }}
                    </p>
                </span>
            </div>
        </template>
    </NuxtLayout>
</template>

<script setup>

// initial value
const carts = useCarts()
</script>