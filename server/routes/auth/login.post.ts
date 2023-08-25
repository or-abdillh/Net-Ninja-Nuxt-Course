import { IUser } from "../../../interfaces/user.interface"

// define interface for user login
interface IRequestBody {
  username: string
  password: string
  id: number
}

interface IResponse {
  status: boolean
  message: string
  data: Object | Array<any>
}

interface IToken {
  token: string
}

export default defineEventHandler(async event => {

  // parse body
  const body: IRequestBody = await readBody(event)

  try {
    // fetching
    const response: IToken = await $fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body
    })

    // get spesific user using ID
    const user: IUser = await $fetch(`https://fakestoreapi.com/users/${body.id}`, { method: 'GET' })

    // return to client
    return {
      status: true,
      message: 'Login success',
      data: {
        token: response.token,
        ...user
      }
    } as IResponse

  } catch (err: any) {

    console.log(err)
    // failed authentication
    return {
      status: false,
      message: err?.data,
      data: {}
    } as IResponse
  }

})
