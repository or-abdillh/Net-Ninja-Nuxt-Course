import { IUser } from "../../../interfaces/user.interface"

export default defineEventHandler(async event => {

    const response: IUser[] = await $fetch('https://fakestoreapi.com/users')

    return response.map(item => {
        return {
            id: item?.id,
            email: item?.email,
            username: item?.username,
            password: item?.password,
            name: item?.name
        }
    })
})