import type { APIRoute } from 'astro';
import SubscriptionService from './subscribe/SubscriptionService';
import { ValidationError } from './subscribe/SubscriptionErrors';

export const post: APIRoute = async ({ request }) => {
  const subscriptionService = new SubscriptionService();

  try {
    const data = await request.formData();
    const email = `${data.get('email')}`;
    const firstName = `${data.get('firstName')}`;
    const lastName = `${data.get('lastName')}`;

    await subscriptionService.subscribeUser({
      email,
      firstName,
      lastName,
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
