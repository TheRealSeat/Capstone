import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'


const stripePromise = loadStripe('pk_test_51KiQWrG3YVsmrIIr5k92CvnYtKPPlrd6AOqIs4siioK8RRCXzsnnIUoCbHeZcDBgClZPKVFSZsxuRUEyScxYct1a00h1ZC25da');
const CheckoutWrapper = ({show,handleClose}) => {
  return (
    <Elements stripe={stripePromise}>
        <CheckoutForm show={show} handleClose={handleClose}/>
    </Elements>
  )
}

export default CheckoutWrapper