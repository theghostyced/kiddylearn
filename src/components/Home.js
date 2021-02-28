import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import Button from './Button'

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Logo />
        <Link to='/convert'>
          <Button outlined>Start Learning!</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
