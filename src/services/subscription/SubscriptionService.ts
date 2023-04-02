import { object, string } from 'yup';
import { ValidationError } from './SubscriptionErrors';
import type MailChimpService from './MailChimpService';

type NewSubscriberPayload = {
  email: string;
};

class SubscriptionService {
  subscriptionSchema = object().shape({
    email: string().email().required(),
  });
  private subscriptionClient: MailChimpService;

  constructor({
    subscriptionClient,
  }: {
    subscriptionClient: MailChimpService;
  }) {
    this.subscriptionClient = subscriptionClient;
  }

  async validate(payload: Partial<NewSubscriberPayload>) {
    try {
      return await this.subscriptionSchema.validate(payload);
    } catch (e) {
      throw new ValidationError('Invalid Subscription Payload');
    }
  }

  async subscribeUser(payload: NewSubscriberPayload) {
    const { email } = await this.validate(payload);
    await this.subscriptionClient.subscribeUser({ email });
  }
}

export default SubscriptionService;
