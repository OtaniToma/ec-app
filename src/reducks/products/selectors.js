import { createSelector } from 'reselect'

const userSelector = (state) => state.users;
const productsSelector = (state) => state.products;

export const getIsSignedIn = createSelector(
  [userSelector],
  state => state.isSignedIn
)

export const getUserId = createSelector(
  [userSelector],
  state => state.uid
)

export const getUsername = createSelector(
  [userSelector],
  state => state.username
)

export const getProducts = createSelector(
  [productsSelector],
  state => state.list
)