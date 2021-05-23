import React, { useRef, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { Article } from 'components/Article'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { authenticate } from 'state/app'
import { showModal } from 'state/modal'
import { useCommonStyles } from 'misc/styles'
import { Theme } from 'misc/theme'
import { RootState } from 'misc/rootReducer'

export const AuthForm = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const formRef = useRef<HTMLFormElement>()
  const { loading } = useSelector((state: RootState) => state.app)
  const { columnStart, rowBetween } = useCommonStyles()

  const resetFrom = useCallback(() => {
    formRef.current?.reset()
  }, [])

  const getAuthData = useCallback((formData: FormData) => {
    const email = formData.get('email') as string || ''
    const password = formData.get('password') as string || ''

    return ({ email, password })
  }, [])

  const handleSubmit = useCallback((event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.preventDefault()
    const data = new FormData(formRef.current);
    const { email, password } = getAuthData(data)

    if (email && password) {
      dispatch(authenticate({ email, password }))
      resetFrom()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, formRef.current])

  const handleOpenModal = useCallback(() => {
    dispatch(showModal({ modalType: 'reset-password' }))
  }, [dispatch])

  return (
    <>
      <div className={classes.formMask} />
      <div className={clsx(columnStart, classes.formContainer)}>
        <form ref={formRef as React.LegacyRef<HTMLFormElement>} onSubmit={handleSubmit}>
          <div className={classes.formHeader}>Welcome</div>
          <div className={classes.formSubHeader}>Please sign in to continue</div>
          <hr className={classes.separator} />
          <div className={classes.logo}><Logo /></div>
          <Input className={classes.formInput} label='Username' name='email' type='email' required />
          <Input className={classes.formInput} label='Password' name='password' type='password' minLength={8} required />
          <div className={clsx(rowBetween, classes.buttons)}>
            <Button type='submit' disabled={loading} >Sign In</Button>
            <Button variant='text' onClick={handleOpenModal}>Forgot password?</Button>
          </div>
          <hr className={clsx(classes.separator, classes.separatorBottom)} />
          <div className={clsx(rowBetween, classes.articles)}>
            <Article
              title='LATEST BLOG POST'
              content={(
                <>
                  <div>October 15, 2018</div>
                  <div>Create Efficiency with a Creative Asset Management Platform</div>
                </>
              )}
            />
            <Article
              title='RECENT TWEET'
              content={(
                <>
                  <div>April 25, 2018</div>
                  <div>#HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…</div>
                </>
              )}
            />
          </div>
        </form>
      </div>
    </>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  formHeader: {
    fontSize: '40px',
    fontWeight: 'bold',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '26px',
    }, 
  },
  formSubHeader: {
    color: theme.colors.primary,
    fontSize: '26px',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '20px',
    }, 
  },
  logo: {
    marginBottom: theme.spacing(2.5),

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginBottom: theme.spacing(3),
    }, 
  },
  separator: {
    width: '400px',
    margin: theme.spacing(3, 0, 4, 0),

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      margin: '27px 0 29px 0',
      width: '335px',
    }, 
  },
  separatorBottom: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    }, 
  },
  buttons: {
    padding: '7px 0',
  },
  articles: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    }, 
  },
  formMask: {
    position: 'absolute',
    height: '100%',
    minWidth: '702px',
    opacity: '0.6',
    backgroundColor: theme.colors.black,

    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      width: '100%',
    }, 

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    }, 
  },
  formContainer: {
    zIndex: 100,
    height: '100%',
    padding: '113px 150px',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '113px 0',
      alignItems: 'center',
      width: '100%',
    }, 
  },
  formInputLabel: {
    height: '18.4px',
    color: theme.colors.primary,
  },
  formInput: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginBottom: theme.spacing(3),
    }, 
  },
}))
