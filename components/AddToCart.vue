<template>
    <!-- action -->
    <section class="flex gap-2 items-center">
        <button @click="decreaseQuantity" :disabled="quantity == 0" class="btn btn-primary"><i class="fa-solid fa-minus"></i></button>
        <span class="text-lg text-green-500 px-6">{{ quantity }}</span>
        <button @click="increaseQuantity" class="btn btn-primary"><i class="fa-solid fa-plus"></i></button>
    </section>
    <!-- summary -->
    <section class="text-right flex gap-2 items-center justify-end">
        <span class="text-2xl text-green-500">
            <i class="fa-solid fa-dollar"></i>
            {{ quantity * price }}
        </span>
        <button @click="addCart" class="btn btn-primary" :disabled="quantity == 0">
            <i class="fa-solid fa-shopping-cart"></i>
            Add To Cart
        </button>
    </section>
</template>

<script setup lang="ts">

import { ICart } from 'interfaces/cart.interface';

// composables
const app = useNuxtApp()
const route = useRoute()
const { session } = await useSession()

// use notyf
const notyfSuccess: any = app.$notyfSuccess

// use state and hanldler
const carts = useCartsState()

// initial state
const quantity: Ref<number> = ref(0)
  const userId = session.value?.auth?.id

// get product id at cart
const availableCart: Ref<ICart | undefined> = ref(carts.getCartByProductId(route.params?.id))

if (availableCart.value) quantity.value = availableCart.value.quantity

// the props
const props = defineProps({
    productId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// decrease amount of item
const decreaseQuantity = (): void => {
    if (quantity.value > 0) quantity.value--
}

// increase amount of item
const increaseQuantity = (): void => {
    quantity.value++
}

// handler for push new item into carts state
const addCart = () => {
  carts.addItem({
    productId: props.productId,
    price: props.price,
    quantity: quantity.value,
    title: props.title,
    userId
  })

  notyfSuccess('Berhasil menambahkan item ke keranjang!')
}

</script>
