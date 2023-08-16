// define interface for user login
interface IBody {
    username: string
    password: string
}

interface IToken {
    token: String
}

export default defineEventHandler(async event => {

    const body: IBody = await readBody(event)
    
    const response: IToken = await $fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body
    }) 

    return response
})