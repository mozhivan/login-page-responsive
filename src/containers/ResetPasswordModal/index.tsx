import React, { useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { hideModal } from 'state/modal'
import { resetPassword } from 'state/app'
import { RootState } from 'misc/rootReducer'

export const ResetPasswordModal = () => {
  const dispatch = useDispatch()
  const { modalType } = useSelector((state: RootState) => state.modal)
  const { user, loading } = useSelector((state: RootState) => state.app)
  const [email, setEmail] = useState('')
  const isOpen = modalType === 'reset-password'

  useEffect(() => {
    if (isOpen) {
      setEmail(user?.email || '')
    } else {
      setEmail('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleSubmit = useCallback(() => {
    dispatch(resetPassword({ email }))
  }, [dispatch, email])

  const handleCloseModal = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  return (
      <Modal
        open={isOpen}
        loading={loading}
        headerContent='Password Reset'
        onOk={handleSubmit}
        onCancel={handleCloseModal}
      >
        <p>Please enter the email address<br />associated with your globaledit account<br />to reset your password.</p>
        <Input type='email' label='Email' variant='light' required value={email} onChange={handleEmailChange} />
      </Modal>
  )
}
