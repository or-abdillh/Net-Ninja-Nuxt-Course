<template>
    <Head>
        <Title>Dojo Merch | {{ product?.title }}</Title>
        <Meta name="description" :content="product?.description"></Meta>
    </Head>
    <NuxtLayout name="default">
        <!-- detail -->
        <ProductDetail :product="product"></ProductDetail>
    </NuxtLayout>
</template>

<script setup>

// get param ID
const { id } = useRoute().params

// generate URI
const URI = `https://fakestoreapi.com/products/${ id }`

// fetching detail product
const { data: product } = await useFetch(URI, { key: URI })

// empty fetch result
if ( !product.value ) {
    throw createError({ statusCode: '404', message: `Product detail with ID ${ id } not found` })
}

</script>