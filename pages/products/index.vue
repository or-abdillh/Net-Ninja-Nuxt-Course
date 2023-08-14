<template>
    <NuxtLayout name="default">

        <!-- title -->
        <section class="mb-8">
            <h2 class="text-green-500 text-xl">Products - Dojo Merch</h2>
            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cumque iusto, dolore alias praesentium odit nostrum! Commodi tempore adipisci aut, labore aliquam ipsam tempora error, minima, enim atque quae quod.</p>
        </section>
        <!-- end of title -->

        <!-- products counter -->
        <section class="mb-5 text-right">
            <p class="text-gray-600">Showing {{ products.length }} products</p>
        </section>
        <!-- end of products counter -->

        <!-- list of cards -->
        <section class="grid grid-cols-4 gap-4">
            <template v-for="product in products" :key="product?.id">
                <!-- card -->
                <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between duration-300 border border-gray-100 hover:border-green-500">
                    <div>
                        <small>Product</small>
                        <h1 class="mb-3 text-lg">{{ product?.title }}</h1>
                    </div>
                    <NuxtLink class="text-green-500 text-sm" :to="`/products/${ product?.id }`">Detail Product</NuxtLink>
                </div>
            </template>
        </section>
        <!-- end of list of cards -->
    </NuxtLayout>
</template>

<script setup>

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>