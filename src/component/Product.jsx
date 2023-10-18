import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Product() {
  return (
    <>
    <div>Product</div>
    <input type="search" placeholder='search for products'/>
    <nav className='productStyle'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
c
export default Product