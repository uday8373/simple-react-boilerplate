import React from 'react'
import './home.css'
import {useHistory} from 'react-router-dom'
import HomeHeader from '../../Component/Home/homeHeader'

export default function Home() {
  const history = useHistory()
  return (
    <div className="home-container">
      <HomeHeader />
      <h1>This is HOME page</h1>
      <a onClick={() => history.push('/profile')}>Go to Profile</a>
    </div>
  )
}
