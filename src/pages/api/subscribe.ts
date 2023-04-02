import type { APIRoute } from 'astro';
import SubscriptionService from '../../services/subscription/SubscriptionService';
import { ValidationError } from '../../services/subscription/SubscriptionErrors';
import MailChimpService from '../../services/subscription/MailChimpService';

export const post: APIRoute = async ({ request }) => {
  const subscriptionService = new SubscriptionService({
    subscriptionClient: new MailChimpService(),
  });

  try {
    const data = await request.formData();
    const email = `${data.get('email')}`;

    await subscriptionService.subscribeUser({
      email,
    });

    // Do something with the data, then return a success response
    return new Response(
      JSON.stringify({
        message: 'Success!',
      }),
      { status: 200 }
    );
  } catch (e) {
    if (e instanceof ValidationError) {
      return new Response(
        JSON.stringify({
          message: 'Bad Request',
        }),
        { status: 400 }
      );
    }

    console.log(e);
    return new Response(
      JSON.stringify({
        message: 'Internal Server Error',
      }),
      { status: 500 }
    );
  }
};
