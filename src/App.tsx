import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './rootReducer'
import { addCount, minusCount } from './counter'

export const incrementAsync = () => ({
  type: 'INCREMENT_ASYNC',
})

export const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { clicks } = useSelector((state: RootState) => state.count)

  const increment = (page: number) => {
    dispatch(addCount(page))
  }

  const decrement = (page: number) => {
    dispatch(minusCount(page))
  }


  return (
    <main className={classes.appMain}>
      <header className={classes.appHeader}>Welcome</header>
    </main>
  )
}

const useStyles = createUseStyles((theme) => ({
  '@global': {
    body: {
      fontFamily: 'Roboto',
      width: '100vw',
      height: '100vh',
      color: '#FFF',
      background: '#000'
    },
  },
  appMain: {
    padding: 0,
  },
  appHeader: {
    fontSize: '26px',
  }
}))
