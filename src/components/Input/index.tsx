import React, { useState, useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from 'misc/theme'
import clsx from 'clsx'

type InputTypes = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string
  type?: InputTypes
}

export const Input = (props: InputProps) => {
  const { type = 'text', label, className, ...restProps } = props
  const classes = useStyles()
  const [inputType, setInputType] = useState(type)
  const isPassword = inputType === 'password'

  const handleShowClick = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }, [inputType])

  return (
    <>
      {label && <div className={classes.formInputLabel}>{label}</div>}
      <div className={classes.formInputContainer}>
        <input {...restProps} className={clsx(className, classes.formInput)} type={inputType}>
        </input>
        {type === 'password' && <button type='button' className={clsx(classes.showButton, !isPassword && classes.showButtonActive)} onClick={handleShowClick}>Show</button>}
      </div>
    </>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  formInputLabel: {
    height: '18.4px',
    color: theme.colors.greyish,
  },
  formInputContainer: {
    width: '372px',
    height: '44px',
    margin: '9.5px 0 0 1px',
    borderRadius: '3px',
    border: 'solid 1px #151515',
    backgroundColor: theme.colors.davyGray,
    display: 'flex',
    padding: '0 13px',
    alignItems: 'center',
    marginBottom: '16px',
  },
  formInput: {
    border: 'none',
    backgroundColor: theme.colors.davyGray,
    color: theme.colors.white,
    fontSize: '20px',
    width: '100%',
    outline: 'none',
  },
  showButton: {
    marginLeft: 'auto',
    backgroundColor: theme.colors.davyGray,
    border: 'none',
    outline: 'none',
    fontSize: '12px',
    textAlign: 'right',
    color: theme.colors.greyish,
  },
  showButtonActive: {
    color: '#4894d4',
  },
}))

