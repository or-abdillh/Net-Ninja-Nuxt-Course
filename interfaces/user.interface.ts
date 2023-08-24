interface IProfileUser {
  firstname: string
  lastname: string
}

export interface IUser {
  id: number
  email: string
  password: string
  username: string
  name: IProfileUser
}
