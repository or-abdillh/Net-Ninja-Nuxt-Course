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
        <section v-if="!isFetching" class="mb-5 text-right">
            <p class="text-gray-600">Showing {{ products?.length }} products</p>
        </section>
        <!-- end of products counter -->

        <!-- list of cards -->
        <section v-if="!isFetching" class="grid grid-cols-4 gap-4">
            <template v-for="product in products" :key="product?.id">
                <!-- card -->
                <ProductCard :product="product"></ProductCard>
            </template>
        </section>
        <!-- end of list of cards -->

        <!-- fetching state -->
        <section v-else class="mt-12">
            <p class="text-center">Please wait ...</p>
        </section>
        <!-- end of fetching state -->
    </NuxtLayout>
</template>

<script setup>

useHead({
    title: 'Dojo Merch - Products',
    meta: [
        { name: 'description', content: 'Nisi irure est eiusmod sit in Lorem Lorem proident pariatur laboris est ex ad esse.' }
    ]
})

const isFetching = ref(false)

const { data: products } = await useFetch('/api/products')

const categoryHandler = async URI => {
    // fetching begin
    isFetching.value = true

    await useFetch(URI, {
        key: URI,
        onResponse({ response }) {
            products.value = response?._data
        }
    })

    // fetching is over
    isFetching.value = false
}

</script>