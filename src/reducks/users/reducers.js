import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN: {
      return {
        ...state, // 今回変更しないstateも含めてreturnしないと、既存のstateが失われる
        ...action.payload
      }
    }
    default:
      return state
  }
}