import { IProducts } from "../../../interfaces/products.interface"

export default defineEventHandler(async event => {

  // fetching all products
  const response: IProducts = await $fetch('https://fakestoreapi.com/products', {
    responseType: 'json'
  })

  // return to client
  return response
})
