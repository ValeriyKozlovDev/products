export interface IAuthInitialState {
  loginAgain: boolean,
  loading: boolean,
  userLogin: string
}

export interface IUser {
  email: string,
  name?: string,
  password: string,
  returnSecureToken?: boolean
}

export interface AuthResponse {
  idToken: string
  expiresIn: string
}
