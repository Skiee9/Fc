import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {




  return (
    <>
        <nav style ={
            {
                display:"flex",
                justifyContent:"flex-start",
                gap:"20px"
                // flexDirection:"column"
            }
        }>
            <Link to ="/">My Store</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/productlist">Product</Link>
        </nav>
    </>
  )
}

export default Navbar
