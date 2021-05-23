export type ModalType = 'reset-password' | 'reset-info'
export type ButtonVariant = 'filled' | 'text'

export type User = {
  email: string
}

export type AuthData = {
  email: string
  password: string
}

export type ResetData = {
  email: string
}

