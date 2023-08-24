import { ISession } from "../../../interfaces/session.interface"
import { ICart } from "../../../interfaces/cart.interface"

export default defineEventHandler(async event => {

  // get session
  const session: ISession = event.context.session

  // get user id
  const userId = session?.auth?.id

  // fetch cart by user id
  const response: ICart = await $fetch(`https://fakestoreapi.com/carts/${userId}`)

  return response
})
