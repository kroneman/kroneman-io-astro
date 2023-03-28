import { describe, it, expect } from 'vitest';
import SubscriptionService from '../SubscriptionService';
import { ValidationError } from '../SubscriptionErrors';

describe('SubscriptionService', () => {
  describe('validation', () => {
    it('throws a bad request error, when invalid data is sent', () => {
      const subscriptionService = new SubscriptionService();
      const asyncAction = () =>
        subscriptionService.subscribeUser({
          firstName: 'Adam',
          lastName: 'Henry',
          email: 'adam.henry',
        });

      expect(asyncAction).rejects.toThrow(
        new ValidationError('Invalid Subscription Payload')
      );
    });

    it('does not throw an error when a valid payload is sent', async () => {
      const subscriptionService = new SubscriptionService();
      const result = await subscriptionService.subscribeUser({
        firstName: 'Adam',
        lastName: 'Henry',
        email: 'adam.henry@example.com',
      });

      expect(result).toEqual(undefined);
    });
  });
});
