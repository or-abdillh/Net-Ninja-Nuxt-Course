import { defineStore } from "pinia"
import { ICart } from "interfaces/cart.interface"

export const useCartsState = defineStore('carts-state', {

  persist: true,
  state() {
    return {
      carts: []
    } as { carts: Array<ICart> }
  },

  getters: {

    getCarts(state) {
      return state.carts
    },

    getCartByProductId(state) {
      return (productId: any) => state.carts.find(cart => cart.productId == productId)
    },

    getCartsLength(state) {
      return state.carts.length
    }
  },

  actions: {

    // push item into carts state
    addItem(payload: ICart) {

      // check cart status available from payload
      const isProductExist: boolean = this.carts.some(cart => cart.productId == payload.productId)

      // re assign quantity
      if (isProductExist) {
        this.carts.forEach(cart => {
          if (cart.productId == payload.productId) {
            cart.quantity = payload.quantity
          }
        })
      } else this.carts.push(payload) // push new item
    }
  }
})
