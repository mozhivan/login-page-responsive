import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { Article } from 'components/Article'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { RootState } from 'misc/rootReducer'
import { useCommonStyles } from 'misc/styles'
import { Theme } from 'misc/theme'
import { addCount, minusCount } from './counter'

export const incrementAsync = () => ({
  type: 'INCREMENT_ASYNC',
})

export const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { columnStart, rowBetween } = useCommonStyles()
  const { clicks } = useSelector((state: RootState) => state.count)

  const increment = (page: number) => {
    dispatch(addCount(page))
  }

  const decrement = (page: number) => {
    dispatch(minusCount(page))
  }


  return (
    <div className={classes.appContainer}>
      <img
        alt=''
        src="assets/bgimage.png"
        srcSet="assets/bgimage@2x.png 2x,assets/bgimage@3x.png 3x"
        className={classes.bgImage}
      />
      <div className={classes.formMask} />
      <div className={clsx(columnStart, classes.formContainer)}>
        <form>
          <div className={classes.appHeader}>Welcome</div>
          <div className={classes.appSubHeader}>Please sign in to continue</div>
          <hr className={classes.separator} />
          <div className={classes.logo}><Logo /></div>
          <Input label='Username' className={classes.formInput} />
          <Input label='Password' className={classes.formInput} type='password' />
          <div className={clsx(rowBetween, classes.buttons)}>
            <Button type='submit' >Sign In</Button>
            <Button variant='text'>Forgot password?</Button>
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
      background: theme.colors.black
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
  bgImage: {
    position: 'absolute',
    right: 0,
    height: '100%',
    objectFit: 'contain',

    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      height: 'auto',
      width: '100%',
      bottom: 0,
    }, 
  },
  appContainer: {
    padding: 0,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  appHeader: {
    fontSize: '40px',
    fontWeight: 'bold',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '26px',
    }, 
  },
  appSubHeader: {
    color: theme.colors.primary,
    fontSize: '26px',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '20px',
    }, 
  },
  logo: {
    marginBottom: '20px',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      marginBottom: '25px',
    }, 
  },
  separator: {
    width: '400px',
    margin: '24px 0 31px 0',

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
      width: '309px',
      marginBottom: '24px',
    }, 
  },
}))
