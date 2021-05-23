import React, { PropsWithChildren } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { Portal } from 'components/Portal'
import { Button } from 'components/Button'
import { useCommonStyles } from 'misc/styles'
import { Theme } from 'misc/theme'

type Props = {
  open: boolean
  loading?: boolean
  headerContent: React.ReactNode
  cancelButtonText?: string
  okButtonText?: string
  className?: string
  onOk?: () => void
  onCancel: () => void
}

export const Modal = (props: PropsWithChildren<Props>) => {
  const {
    open,
    headerContent,
    className,
    children,
    loading,
    cancelButtonText = 'Cancel',
    okButtonText = 'Submit',
    onOk,
    onCancel,
  } = props
  const classes = useStyles()
  const { columnCenter, columnStart, center, rowBetween, rowStart } = useCommonStyles()
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (onOk) {
      onOk()
    }
  }

  return (
    <>
      {open && (
        <Portal id='modal'>
          <div className={classes.presentation} />
          <form onSubmit={handleSubmit}>
            <div className={clsx(center, classes.modalContainer)}>
              <div className={clsx(className, columnCenter, classes.modalRoot)}>
                <div className={clsx(rowBetween, classes.modalHeader)}>
                  {headerContent}
                  <button onClick={onCancel} className={clsx(center, classes.closeButton)}><span role='img' aria-label='close'>❌</span></button>
                </div>
                <div className={clsx(columnStart, classes.modalContent)}>
                  {children}
                </div>
                {onOk && (
                  <div className={clsx(rowStart, classes.modalButtons)}>
                    <Button type='submit' disabled={loading}>{okButtonText}</Button>
                    <Button className={classes.cancelButton} onClick={onCancel}>{cancelButtonText}</Button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </Portal>
      )}
    </>
  )
}

const useStyles = createUseStyles((theme: Theme) => ({
  presentation: {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.2)',
    top: 0,
    width: '100vw',
    height: '100vh',
  },
  modalContainer: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingTop: theme.spacing(2.5),
      justifyContent: 'flex-start',
    }, 
  },
  modalRoot: {
    zIndex: 1000,
    width: '400px',
    maxHeight: '310px',
    borderRadius: '5px 5px 3px 3px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.colors.white, 
    padding: theme.spacing(0, 2.5),

    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      width: '350px',
    }, 

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '297px',
    }, 
  },
  modalHeader: {
    width: '100%',
    height: '32px',
    margin: '0',
    padding: '14px 20px',
    borderRadius: '3px 3px 0 0',
    backgroundColor: theme.colors.darkGrey,
  },
  closeButton: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: theme.colors.davyGray,
    color: theme.colors.darkGrey,
    fontSize: '19px',

    '& > span': {
      marginTop: '1px',
    }
  },
  cancelButton: {
    backgroundColor: theme.colors.warmGray,
  },
  modalContent: {
    width: '100%',
    padding: theme.spacing(0, 2.5, 1.3, 2.5),
    color: theme.colors.davyGray,

    '& > p': {
      marginBottom: theme.spacing(3),
    },
  },
  modalButtons: {
    width: '100%',
    padding: '20px',
    marginTop: 'auto',
    borderRadius: '0 0 3px 3px',
    boxShadow: '0 -3px 10px -4px rgba(0, 0, 0, 0.4)',
    backgroundColor: theme.colors.white,

    '& > button': {
      marginRight: '20px',
    }
  },
}))

