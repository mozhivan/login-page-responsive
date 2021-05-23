import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useDispatch } from 'react-redux'

import { Background } from 'components/Background'
import { AuthForm } from 'containers/AuthForm'
import { ResetPasswordModal } from 'containers/ResetPasswordModal'
import { InfoModal } from 'containers/InfoModal'
import { RootState } from 'misc/rootReducer'
import { Theme } from 'misc/theme'
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
    <div className={classes.appContainer}>
      <InfoModal />
      <ResetPasswordModal />
      <Background />
      <AuthForm />
    </div>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  '@global': {
    body: {
      padding: 0,
      margin: 0,
      fontFamily: 'Roboto',
      width: '100vw',
      height: '100vh',
      color: theme.colors.white,
      background: theme.colors.black,
      overflow: 'hidden',
    },
    hr: {
      width: '100%',
      height: '3px',
      backgroundColor: theme.colors.darkGrey,
      border: 'none',
    },
    button: {
      cursor: 'pointer',

      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  appContainer: {
    padding: 0,
    display: 'flex',
    height: '100vh',
  },
}))
