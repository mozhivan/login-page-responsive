import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Modal } from 'components/Modal'

export const InfoModal = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleCancelModal = () => {
    setIsModalOpen(false)
  }

  return (
      <Modal
        open={isModalOpen}
        headerContent='Email Sent'
        onCancel={handleCancelModal}
      >
        <p>Thank you, instructions to reset your<br />password have been e-mailed to the<br />address you provided!</p>
      </Modal>
  )
}
