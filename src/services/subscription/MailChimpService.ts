import mailchimp from '@mailchimp/mailchimp_marketing';

const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
const LIST_KEY = import.meta.env.MAILCHIMP_LIST_ID;
const SERVER_ID = import.meta.env.MAILCHIMP_SERVER_ID;

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_ID,
});

type subscribingUser = {
  email: string;
};

class MailChimpService {
  async subscribeUser(user: subscribingUser) {
    const { email } = user;

    return await mailchimp.lists.addListMember(LIST_KEY, {
      email_address: email,
      status: 'subscribed',
    });
  }

  async getLists() {
    return await mailchimp.lists.getAllLists();
  }

  async health() {
    return mailchimp.ping.get();
  }
}

export default MailChimpService;
