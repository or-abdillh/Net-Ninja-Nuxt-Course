<template>
    <section>
        <p class="mb-2">Category</p>
        <section class="flex gap-2">
            <!-- default -->
            <button @click="changed('All')" :class="active == 'All' ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn px-6 border border-green-400 duration-300">All</button>

            <!-- others -->
            <template v-for="category in categories" :key="category">
                <button @click="changed(category)" :class="active == category ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn border border-green-400 px-6 duration-300">{{ category }}</button>
            </template>
        </section>
    </section>
</template>

<script setup lang="ts">

// get categories
const { data: categories }: { data: Ref<string[]> } = await useFetch('/api/products/category')

const active = ref('All')

const emits = defineEmits(['category:change'])

const changed = (value: string): void => {

    active.value = value

    // generate URI
    let URI

    if (value == 'All') {
        URI = '/api/products'
    } else {
        URI = `/api/products/category/${ value }`
    }

    // trigger event
    emits('category:change', URI)
}

</script>
