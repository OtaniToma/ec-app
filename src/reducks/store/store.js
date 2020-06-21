import { createStore as reduxCreateStore, combineReducers } from 'redux'
// import { ProductsReducer } from '../products/reducers'
import { UsersReducer } from '../users/reducers'

export default function createStore() {
  return reduxCreateStore( // reduxのcreateStoreメソッドを別名で定義して使用する
    combineReducers({
      // products: ProductsReducer,
      users: UsersReducer
    })
  )
}