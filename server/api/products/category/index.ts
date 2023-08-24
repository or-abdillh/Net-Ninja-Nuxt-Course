export default defineEventHandler(async event => {

  const response: Array<String> = await $fetch('https://fakestoreapi.com/products/categories')

  return response;
})
