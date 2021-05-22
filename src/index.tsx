import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { create } from 'jss'
import { JssProvider } from 'react-jss'
import globalPlugin from 'jss-global'
import camelCase from 'jss-plugin-camel-case'
import configureStore from './store'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const initialState = {}
const store = configureStore(initialState)

const jss = create()
jss.use(globalPlugin(), camelCase())

ReactDOM.render(
  <JssProvider jss={jss}>
    <Provider store={store}>
      <App />
    </Provider>
  </JssProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
