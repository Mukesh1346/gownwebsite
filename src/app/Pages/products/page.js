import Products from '@/app/Components/Products/Products'
import React from 'react'

export default function page() {
  return (
    <>
        <div className='text-center my-4'>
            <h3>All Products</h3>
        </div>
      <Products display="d-none"/>   
    </>
  )
}
