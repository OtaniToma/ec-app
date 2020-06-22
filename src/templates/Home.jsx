import React from 'react'
import { getUserId } from '../reducks/users/selectors'
import { getUsername } from '../reducks/users/selectors'
import { useSelector } from 'react-redux'

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <>
    <h2>Home</h2>
    <p>ユーザーID：{uid}</p>
    <p>ユーザー名：{username}</p>
    </>
  )
}

export default Home