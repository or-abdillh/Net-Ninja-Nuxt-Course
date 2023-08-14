<template>
    <NuxtLayout name="default">

        <!-- title -->
        <section class="mb-8">
            <h2 class="text-green-500 text-xl">Products - Dojo Merch</h2>
            <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cumque iusto, dolore alias praesentium odit nostrum! Commodi tempore adipisci aut, labore aliquam ipsam tempora error, minima, enim atque quae quod.</p>
        </section>
        <!-- end of title -->

        <!-- categories -->
        <ProoductCategory @category:change="categoryHandler"></ProoductCategory>

        <!-- products counter -->
        <section class="mb-5 text-right">
            <p class="text-gray-600">Showing {{ products.length }} products</p>
        </section>
        <!-- end of products counter -->

        <!-- list of cards -->
        <section class="grid grid-cols-4 gap-4">
            <template v-for="product in products" :key="product?.id">
                <!-- card -->
                <ProductCard :product="product"></ProductCard>
            </template>
        </section>
        <!-- end of list of cards -->
    </NuxtLayout>
</template>

<script setup>

const products = ref([])

const categoryHandler = async URI => {
    await useFetch(URI, {
        key: URI,
        onResponse({ request, response, options }) {
            products.value = response?._data
        }
    })
}

</script>