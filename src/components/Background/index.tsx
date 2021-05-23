import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from 'misc/theme'

export const Background = () => {
  const classes = useStyles()

  return (
    <img
      alt=''
      src="assets/bgimage.png"
      srcSet="assets/bgimage@2x.png 2x,assets/bgimage@3x.png 3x"
      className={classes.bgImage}
    />
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
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
}))
