import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from 'sagas'
import { rootReducer } from './rootReducer'

export default function configureAppStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  })

  sagaMiddleware.run(rootSaga)
  return store
}
