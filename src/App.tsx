import React from 'react'
import { createUseStyles } from 'react-jss'

import { Background } from 'components/Background'
import { AuthForm } from 'containers/AuthForm'
import { ResetPasswordModal } from 'containers/ResetPasswordModal'
import { EmailSentModal } from 'containers/EmailSentModal'
import { Theme } from 'misc/theme'

export const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.appContainer}>
      <EmailSentModal />
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
      '&:disabled': {
        backgroundColor: theme.colors.darkGrey,
        cursor: 'default',

        '&:hover': {
          opacity: 1,
        },
      },
    },
  },
  appContainer: {
    padding: 0,
    display: 'flex',
    height: '100vh',
  },
}))
