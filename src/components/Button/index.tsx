import React, { PropsWithChildren } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { Theme } from 'misc/theme'
import { ButtonVariant } from 'models'

type ButtonProps = {
  variant?: ButtonVariant
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { variant = 'filled', className, children, ...restProps } = props
  const classes = useStyles()

  return (
      <button
        type='button'
        className={clsx(className, classes.button, variant === 'text' && classes.buttonText)}
        {...restProps}
      >
        {children}
      </button>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    minWidth: '110px',
    height: '36px',
    padding: '9px 0 10px',
    borderRadius: '3px',
    backgroundColor: theme.colors.secondary,
    fontSize: '14px',
    fontWeight: 'bold',
    color: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    fontSize: '13px',
    textAlign: 'right',
    textDecoration: 'underline',
    background: 'none',
    color: theme.colors.primary,
  },
}))

