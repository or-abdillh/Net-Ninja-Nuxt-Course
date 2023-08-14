<template>
    <section>
        <p class="mb-2">Category</p>
        <section class="flex gap-2">
            <!-- default -->
            <button @click="changed('All')" :class="active == 'All' ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn px-6 border border-green-400 duration-300">All</button>

            <!-- others -->
            <template v-for="category in categories" :key="category">
                <button @click="changed(category)" :class="active == category ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn border border-green-400 px-6 text-green-500 duration-300">{{ category }}</button>
            </template>
        </section>
    </section>
</template>

<script setup>

const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')

const active = ref('All')

const emits = defineEmits(['category:change'])

const changed = value => {

    active.value = value

    // generate URI
    let URI
    if (value == 'All') {
        URI = 'https://fakestoreapi.com/products'
    } else {
        URI = `https://fakestoreapi.com/products/category/${ value }`
    }
    // trigger event
    emits('category:change', URI)
}

</script>
