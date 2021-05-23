
import { combineReducers } from '@reduxjs/toolkit'

import modal from 'state/modal'
import app from 'state/app'

export let rootReducer = combineReducers({
  modal,
  app,
})

export type RootState = ReturnType<typeof rootReducer>
