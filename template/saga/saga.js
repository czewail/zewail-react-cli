import { call, put, takeEvery } from 'redux-saga/effects'

function* sagaFlowName({  }) {
  try {
    // call something async 
    // put something success action
  } catch (error) {
    // put some failed action
  }
}

export default function* homeFLow() {
  yield takeEvery('EXAMPLE_ACTION', sagaFlowName)
}