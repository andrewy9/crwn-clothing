import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51InyXGCP3SvglJckOhx3qpI5zgSK7cuEkVUOmcitK1kWOwDy5FAB4hu2WxpkC66frfRtXZAOYHkbiq9RYV1eqjAY00oeIyyxlD'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clowthing"
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;