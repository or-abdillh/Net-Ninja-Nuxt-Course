export interface ISession {
  id: string
  createdAt: Date
  auth?: {
    name?: {
      firstname?: string
      lastname?: string
    }
    id?: number
    token?: string
  }
}
