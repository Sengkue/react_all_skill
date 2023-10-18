import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    {/* <button onClick={()=> navigate('/contact',{replace:true}) }>Go to Contact</button> */}
    <button onClick={()=> navigate('/contact') }>Go to Contact</button>
    </>
  )
}

export default Home