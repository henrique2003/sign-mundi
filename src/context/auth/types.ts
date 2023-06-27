export interface IAuthContextData {
  admin: IAdmin | null
  isLogged: boolean
  isSignIn: boolean
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface IAdmin {
  _id: string
  username: string
}

export interface IAuthResponse {
  token: string
  user: IAdmin
}

export interface IAuthorizationResponse {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

export interface IApiAuthResponse {
  user: IAdmin
  token: string
}
