export interface IRegisterData {
  username: string
  email: string
  password: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface IUser {
  uid: string
  email: string
  displayName: string
  photoUrl: string | null
}
