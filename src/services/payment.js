const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID

// Plan details
export const plans = {
  pro: {
    name: 'Pro',
    price: 499,
    priceId: 'pro_monthly',
    features: '50 pieces/month, All 10 formats',
  },
  business: {
    name: 'Business',
    price: 1999,
    priceId: 'business_monthly',
    features: 'Unlimited pieces, Team accounts',
  },
}

// Open Razorpay checkout
export const initiatePayment = ({ planId, user, onSuccess, onError }) => {
  const plan = plans[planId]
  
  if (!plan) {
    onError?.('Invalid plan')
    return
  }

  if (!RAZORPAY_KEY) {
    onError?.('Payment not configured')
    return
  }

  const options = {
    key: RAZORPAY_KEY,
    amount: plan.price * 100, // Razorpay uses paise (₹499 = 49900 paise)
    currency: 'INR',
    name: 'GhostWrite',
    description: `${plan.name} Plan - Monthly Subscription`,
    image: '/vite.svg', // Your logo
    prefill: {
      name: user?.fullName || '',
      email: user?.primaryEmailAddress?.emailAddress || '',
    },
    theme: {
      color: '#DC2626', // Crimson - matches your theme!
    },
    handler: function (response) {
      // Payment successful
      console.log('Payment successful:', response)
      onSuccess?.(response)
    },
    modal: {
      ondismiss: function () {
        console.log('Payment cancelled')
      },
    },
  }

  try {
    const rzp = new window.Razorpay(options)
    rzp.on('payment.failed', function (response) {
      console.error('Payment failed:', response.error)
      onError?.(response.error.description || 'Payment failed')
    })
    rzp.open()
  } catch (error) {
    console.error('Razorpay error:', error)
    onError?.('Failed to open payment. Please try again.')
  }
}

export default { plans, initiatePayment }