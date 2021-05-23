import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeLatest } from 'redux-saga/effects'

import { AuthData, ResetData } from 'models'
import { authenticate, resetPassword, stopLoading, setError, setUser } from 'state/app'
import { showModal } from 'state/modal'

function* authenticateSaga({ payload }: PayloadAction<AuthData>) {
  try {
    yield delay(500)
    const user = { email: payload.email }
    yield put(setUser(user))
  } catch (e) {
    yield put(setError(e.message))
  } finally {
    yield put(stopLoading())
  }
}

function* resetPasswordSaga(_: PayloadAction<ResetData>) {
  try {
    yield delay(500)
    yield put(showModal({ modalType: 'reset-info' }))
  } catch (e) {
    yield put(setError(e.message))
  } finally {
    yield put(stopLoading())
  }
}

export default function* authSaga() {
  yield takeLatest(authenticate.type, authenticateSaga)
  yield takeLatest(resetPassword.type, resetPasswordSaga)
}
