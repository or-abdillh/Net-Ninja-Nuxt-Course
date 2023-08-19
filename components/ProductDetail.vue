<template>
    <section class="bg-white p-12 rounded-lg border flex gap-12">
        <!-- image -->
        <div class="md:w-4/12">
            <img :src="product?.image" alt="Product Hero">
        </div>

        <!-- detail -->
        <div class="flex flex-col gap-7 md:w-8/12">
            <div>
                <p class="text-green-500">Product</p>
                <h1 class="text-3xl font-semibold">{{ product?.title }}</h1>
            </div>
            <div>
                <p class="text-green-500">Price</p>
                <h1 class="text-3xl font-semibold">${{ product?.price }}</h1>
            </div>
            <div>
                <p class="text-green-500">Description</p>
                <h1 class="text-sm text-gray-500">{{ product?.description }}</h1>
            </div>

            <!-- action -->
            <div>
                <button class="btn btn-primary">
                    <i class="fa-solid fa-cart-plus me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
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