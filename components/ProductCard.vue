<template>
    <section class="bg-white p-6 flex flex-col justify-between gap-4 rounded-lg shadow-sm duration-300 border border-gray-100 hover:border-green-500 hover:shadow-green-400 hover:shadow-lg hover:-translate-y-1">
        <section class="grid grid-cols-2 gap-6">
            <div class="grid place-items-center">
                <NuxtImg preset="avatar" :src="product?.image" quality="80" format="webp" preload loading="lazy"></NuxtImg>
            </div>
            <section>
                <!-- product -->
                <div>
                    <small class="text-gray-500">Product</small>
                    <h1 class="mb-3 text-lg truncate">{{ product?.title }}</h1>
                </div>
                <!-- price -->
                <div>
                    <small class="text-gray-500">Price</small>
                    <h1 class="mb-3 text-lg">${{ product?.price }}</h1>
                </div>
            </section>
        </section>
        <NuxtLink class="btn btn-primary mb-0" :to="`/products/${ product?.id }`">Detail Product</NuxtLink>
    </section>
</template>

<script setup lang="ts">

import { IProduct } from '../interfaces/product.interface'

const props = defineProps({
    product: {
        type: Object as () => IProduct,
        required: true
    }
})

</script>