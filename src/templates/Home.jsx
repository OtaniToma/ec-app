import React from 'react'
import { getUserId } from '../reducks/users/selectors'
import { getUsername } from '../reducks/users/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../reducks/users/operations'

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <>
      <h2>Home</h2>
      <p>ユーザーID：{uid}</p>
      <p>ユーザー名：{username}</p>
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </>
  )
}

export default Home