import StripeCheckout from 'react-stripe-checkout';

// const STRIPE_PUBLISHABLE = 'pk_test_0eKSi4tnuGE57U2ITlBiVU3v00pG2nTPAR';
const STRIPE_PUBLISHABLE = 'pk_test_51KpnnQSBQGiFWyMnUWMS8iWK8qhEWixupHd2g1BdxnDT7DteYkkJrez6SgtrfmRhJYJ3ZwVhp0YbjppPf8fKNtZd00GdcffPWT'

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='INR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;