import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { UsersReducer } from '../users/reducers'
import { ProductsReducer } from '../products/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function createStore(history) {
  return reduxCreateStore( // reduxのcreateStoreメソッドを別名で定義して使用する
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      products: ProductsReducer
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  )
}