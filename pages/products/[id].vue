<template>
    <NuxtLayout name="default">
        <!-- detail -->
        <ProductDetail :product="product"></ProductDetail>
    </NuxtLayout>
</template>

<script setup>

const { id } = useRoute().params

const URI = `https://fakestoreapi.com/products/${ id }`

const { data: product } = await useFetch(URI, { key: URI })

</script>