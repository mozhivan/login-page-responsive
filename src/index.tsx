import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { create } from 'jss'
import { JssProvider, ThemeProvider } from 'react-jss'
import camelCase from 'jss-plugin-camel-case'
import jssNested from 'jss-plugin-nested'
import globalPlugin from 'jss-global'

import { theme } from 'misc/theme'
import configureStore from 'misc/store'
import * as serviceWorker from 'misc/serviceWorker'
import { App } from './App'

const initialState = {}
const store = configureStore(initialState)

const jss = create()
jss.use(globalPlugin(), camelCase(), jssNested())

ReactDOM.render(
  <JssProvider jss={jss}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </JssProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
