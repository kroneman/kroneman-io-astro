import { object, string } from 'yup';
import { MemberExistsError, ValidationError } from './SubscriptionErrors';
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
    try {
      const { email } = await this.validate(payload);
      await this.subscriptionClient.subscribeUser({ email });
    } catch (e) {
      const error = this.tryParseError(e);
      if (error) {
        throw error;
      }

      throw e;
    }
  }

  tryParseError(e: unknown) {
    try {
      // @ts-ignore
      const error = JSON.parse(e.response.text);
      if (error.title?.toLowerCase() === 'member exists') {
        return new MemberExistsError();
      }

      return null;
    } catch (err) {
      return null;
    }
  }
}

export default SubscriptionService;
