import { describe, it, expect, vi } from 'vitest';
import SubscriptionService from '../SubscriptionService';
import { ValidationError } from '../SubscriptionErrors';
import MailChimpService from '../MailChimpService';

vi.mock('../MailChimpService');

describe('SubscriptionService', () => {
  describe('validation', () => {
    it('throws a bad request error, when invalid data is sent', () => {
      const subscriptionService = new SubscriptionService({
        subscriptionClient: new MailChimpService(),
      });
      const asyncAction = () =>
        subscriptionService.subscribeUser({
          email: 'adam.henry',
        });

      expect(asyncAction).rejects.toThrow(
        new ValidationError('Invalid Subscription Payload')
      );
    });

    it('does not throw an error when a valid payload is sent', async () => {
      const subscriptionService = new SubscriptionService({
        subscriptionClient: new MailChimpService(),
      });
      const result = await subscriptionService.subscribeUser({
        email: 'adam.henry@example.com',
      });

      expect(result).toEqual(undefined);
    });
  });
});
