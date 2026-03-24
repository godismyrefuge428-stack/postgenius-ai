const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const webhookEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );

    // Handle different event types
    switch (webhookEvent.type) {
      case 'checkout.session.completed':
        const session = webhookEvent.data.object;
        console.log('Checkout session completed:', session.id);
        // TODO: Save subscription to database
        break;

      case 'customer.subscription.updated':
        const subscription = webhookEvent.data.object;
        console.log('Subscription updated:', subscription.id);
        // TODO: Update subscription in database
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = webhookEvent.data.object;
        console.log('Subscription deleted:', deletedSubscription.id);
        // TODO: Mark subscription as cancelled in database
        break;

      case 'invoice.payment_succeeded':
        const invoice = webhookEvent.data.object;
        console.log('Invoice paid:', invoice.id);
        // TODO: Record payment in database
        break;

      case 'invoice.payment_failed':
        const failedInvoice = webhookEvent.data.object;
        console.log('Invoice payment failed:', failedInvoice.id);
        // TODO: Handle failed payment
        break;

      default:
        console.log(`Unhandled event type: ${webhookEvent.type}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${error.message}` }),
    };
  }
};
