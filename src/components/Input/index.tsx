import React, { useState, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { Theme } from 'misc/theme'
import { useCommonStyles } from 'misc/styles'

type InputVariant = 'dark' | 'light'

type InputTypes = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string
  type?: InputTypes
  variant?: InputVariant
}

export const Input = (props: InputProps) => {
  const { type = 'text', label, className, variant, ...restProps } = props
  const classes = useStyles()
  const { columnStart } = useCommonStyles()
  const [inputType, setInputType] = useState(type)
  const isPassword = inputType === 'password'

  const handleShowClick = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }, [inputType])

  return (
    <div className={columnStart}>
      {label && <div className={classes.inputLabel}>{label}</div>}
      <div className={clsx(className, classes.inputContainer,  variant === 'light' && classes.inputLight)}>
        <input {...restProps} className={classes.input} type={inputType}>
        </input>
        {type === 'password' && <button type='button' className={clsx(classes.showButton, !isPassword && classes.showButtonActive)} onClick={handleShowClick}>Show</button>}
      </div>
    </div>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  inputLabel: {
    height: '18.4px',
    color: theme.colors.primary,
  },
  inputContainer: {
    maxWidth: '373px',
    width: '-webkit-fill-available',
    height: '44px',
    marginTop: '9.5px',
    borderRadius: '3px',
    border: 'solid 1px #151515',
    backgroundColor: theme.colors.davyGray,
    display: 'flex',
    padding: '0 13px',
    alignItems: 'center',
    marginBottom: '16px',
  },
  input: {
    border: 'none',
    background: 'none',
    color: theme.colors.white,
    fontSize: '20px',
    width: '100%',
    outline: 'none',
  },
  inputLight: {
    border: `solid 1px ${theme.colors.lightGray}`,
    backgroundColor: theme.colors.whiteGray,

    '& > input': {
      color: theme.colors.davyGray,
    }
  },
  showButton: {
    marginLeft: 'auto',
    backgroundColor: theme.colors.davyGray,
    border: 'none',
    outline: 'none',
    fontSize: '12px',
    textAlign: 'right',
    color: theme.colors.primary,
  },
  showButtonActive: {
    color: theme.colors.secondary,
  },
}))

