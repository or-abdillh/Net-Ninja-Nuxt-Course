import { ISession } from "../../../interfaces/session.interface"

export default defineEventHandler(event => {

  // get session
  const session: ISession = event.context.session

  // remove all authenticated session
  session.auth = {}

  return true
})
