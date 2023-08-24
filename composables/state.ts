import { ICart } from "interfaces/cart.interface"

// init state
export const useCarts = () => useState<ICart[]>('carts', () => [])
