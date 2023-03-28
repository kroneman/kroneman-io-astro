import { object, string } from 'yup';
import { ValidationError } from './SubscriptionErrors';

type NewSubscriberPayload = {
  email: string;
  firstName: string;
  lastName: string;
};

class SubscriptionService {
  subscriptionSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
  });

  async validate(payload: Partial<NewSubscriberPayload>) {
    try {
      return await this.subscriptionSchema.validate(payload);
    } catch (e) {
      throw new ValidationError('Invalid Subscription Payload');
    }
  }

  async subscribeUser(payload: NewSubscriberPayload) {
    await this.validate(payload);
  }

  unsubscribeUser() {
    throw new Error('Not Implemented');
  }
}

export default SubscriptionService;
