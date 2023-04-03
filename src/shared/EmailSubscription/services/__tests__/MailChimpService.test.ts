import { describe, it, expect } from 'vitest';
import MailChimpService from '../MailChimpService';

// since this is a prod api these base tests are skipped by default,
// however they can be turned on in order to debug issues with the service
describe.skip('MailChimpService', () => {
  it('has a health endpoint', async () => {
    const mailChimpService = new MailChimpService();
    const result = await mailChimpService.health();

    expect(result).toEqual({ health_status: "Everything's Chimpy!" });
  });

  it('returns an array of possible lists to subscribe to', async () => {
    const mailChimpService = new MailChimpService();
    const result = await mailChimpService.getLists();

    // @ts-ignore
    const [firstList] = result?.lists || [];
    expect(firstList.id).toEqual('1d077af663');
    expect(firstList.name).toEqual('Blog Subscribers');
  });

  it('throws a bad request error, when a attempting to subscribe someone who is already a member', async () => {
    const mailChimpService = new MailChimpService();

    const pendingSubscriptionRequest = mailChimpService.subscribeUser({
      email: 'a.l.kroneman@gmail.com',
    });

    await expect(pendingSubscriptionRequest).rejects.toThrow(
      new Error('Bad Request')
    );
  });

  it('successfully adds a member to the list, if the call succeeds', async () => {
    const email = 'kellebecca@gmail.com';
    const mailChimpService = new MailChimpService();

    const pendingSubscriptionRequest = mailChimpService.subscribeUser({
      email,
    });

    const result = await pendingSubscriptionRequest;
    // @ts-ignore
    expect(result?.email_address).toEqual(email);
  });
});
