import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ModalType } from 'models'

export type ModalState = {
  modalType: ModalType | null
}

const initialState: ModalState = {
  modalType: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<ModalState>) {
      state.modalType = action.payload?.modalType
    },
    hideModal(state) {
      state.modalType = null
    }
  }
})

export const {
  showModal,
  hideModal
} = modalSlice.actions

export default modalSlice.reducer
