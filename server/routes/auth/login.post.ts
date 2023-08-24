import { IUser } from "../../../interfaces/user.interface"
import { ISession } from "../../../interfaces/session.interface"

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

interface ISessionAuth {
  name: {
    firstname: string,
    lastname: string
  },
  id: number
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

    // access session
    const session: ISession = event.context.session

    // save user credential into session
    session.auth = {
      name: {
        firstname: user.name.firstname,
        lastname: user.name.lastname
      },
      id: user.id,
      token: response.token
    } as ISessionAuth

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
    // failed authentication
    return {
      status: false,
      message: err?.data,
      data: {}
    } as IResponse
  }

})
