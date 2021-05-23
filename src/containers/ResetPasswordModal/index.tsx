import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from 'components/Input'

import { Modal } from 'components/Modal'


export const ResetPasswordModal = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
      <Modal
        open={isModalOpen}
        headerContent='Password Reset'
        onOk={handleSubmit}
        onCancel={handleCloseModal}
      >
        <p>Please enter the email address<br />associated with your globaledit account<br />to reset your password.</p>
        <Input type='email' label='Email' variant='light' />
      </Modal>
  )
}
