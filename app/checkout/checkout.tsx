'use client';

import { Button } from '@mui/material';
import checkout from './actions/checkout';
import getStripe from './stripe';

interface CheckoutProps{
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps ){
  const handleCheckout = async () => {
    const response = await checkout(productId);
    if (response.error) {
      console.error(response.error);
      return;
    }
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId: response.data.id });
  }
return (
    <Button 
      variant='contained' 
      className='max-w-[25%]' 
      onClick={handleCheckout}
    >
      Buy Now!
    </Button>
  )
}