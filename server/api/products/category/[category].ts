import { IProducts } from "../../../../interfaces/products.interface"

export default defineEventHandler(async event => {

    // get param
    const category = getRouterParam(event, 'category')

    // fetching products by category
    const response: IProducts = await $fetch(`https://fakestoreapi.com/products/category/${ category }`)

    // return to client
    return response
})