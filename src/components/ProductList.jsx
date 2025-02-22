import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"

const ProductList = () => {
    const dispatch =useDispatch();


    useEffect(()=>{
        dispatch(fetchProducts());
    })
  return (
    <div>
      <h2>
        
      </h2>
    </div>
  )
}

export default ProductList
