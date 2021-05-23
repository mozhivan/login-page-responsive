import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Modal } from 'components/Modal'
import { hideModal } from 'state/modal'
import { RootState } from 'misc/rootReducer'


export const EmailSentModal = () => {
  const dispatch = useDispatch()
  const { modalType } = useSelector((state: RootState) => state.modal)
  const isOpen = modalType === 'reset-info'

  const handleCancelModal = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  return (
      <Modal
        open={isOpen}
        headerContent='Email Sent'
        onCancel={handleCancelModal}
      >
        <p>Thank you, instructions to reset your<br />password have been e-mailed to the<br />address you provided!</p>
      </Modal>
  )
}
