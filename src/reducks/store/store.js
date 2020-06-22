import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { UsersReducer } from '../users/reducers'

export default function createStore(history) {
  return reduxCreateStore( // reduxのcreateStoreメソッドを別名で定義して使用する
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}