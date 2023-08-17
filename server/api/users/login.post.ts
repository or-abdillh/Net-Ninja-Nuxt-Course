// define interface for user login
interface IRequestBody {
    username: string
    password: string
}

interface IResponse {
    status: boolean
    message: string
    data: Object | Array<any>
}

export default defineEventHandler(async event => {

    const body: IRequestBody = await readBody(event)
    
    try {
        // fetching 
        const response = await $fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body
        })

        // return to client
        return {
            status: true,
            message: 'Login success',
            data: response
        } as IResponse

    } catch(err: any) {
        // failed authentication
        return {
            status: false,
            message: err?.data,
            data: {}
        } as IResponse
    }

})