import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User, AuthData, ResetData } from 'models'

export type AppState = {
  loading: boolean
  error?: unknown
  user?: User
}

const initialState: AppState = {
  loading: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true
    },
    stopLoading(state) {
      state.loading = false
    },
    authenticate(state, action: PayloadAction<AuthData>) {
      state.loading = true
      state.error = null
    },
    resetPassword(state, action: PayloadAction<ResetData>) {
      state.loading = true
      state.error = null
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    setError(state, action: PayloadAction<unknown>) {
      state.error = action.payload
    },
  }
})

export const {
  setUser,
  setError,
  authenticate,
  resetPassword,
  startLoading,
  stopLoading
} = appSlice.actions

export default appSlice.reducer
