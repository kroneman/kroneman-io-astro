import type { APIRoute } from 'astro';
import SubscriptionService from '../../shared/EmailSubscription/services/SubscriptionService';
import {
  MemberExistsError,
  ValidationError,
} from '../../shared/EmailSubscription/services/SubscriptionErrors';
import MailChimpService from '../../shared/EmailSubscription/services/MailChimpService';

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
        message: 'Successfully Subscribed!',
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

    if (e instanceof MemberExistsError) {
      return new Response(
        JSON.stringify({
          message: 'Email is already subscribed',
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Internal Server Error',
      }),
      { status: 500 }
    );
  }
};
