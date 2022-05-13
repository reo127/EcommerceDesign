import React from 'react'
import ErrorImage404 from '../images/404.jpg'

const Error404 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center my-3'>
        <img style={{width:'50%'}} src={ErrorImage404} alt='404' />
    </div>
  )
}

export default Error404