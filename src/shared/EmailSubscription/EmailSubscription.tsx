import React, { useState } from 'react';

import style from './EmailSubscription.module.scss';
import classNames from 'classnames';

const EmailSubscriptionForm = (props: React.ComponentProps<'form'>) => {
  const { className } = props;

  const [responseStatus, setResponseStatus] = useState<
    '' | 'success' | 'error'
  >('');
  const [responseMessage, setResponseMessage] = useState('');

  async function submit(e: any) {
    setResponseMessage('');
    setResponseStatus('');
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }

    if (response.status === 200) {
      setResponseStatus('success');
      return;
    }

    setResponseStatus('error');
  }

  const ContainerClassName = classNames(style.Container, className);
  const StatusClassName = classNames(style.ResponseMessage, {
    [style.IsSuccess]: responseStatus === 'success',
    [style.IsError]: responseStatus === 'error',
  });
  return (
    <form onSubmit={submit} className={ContainerClassName}>
      <label className={style.Title} htmlFor={'email'}>
        Sign up
      </label>
      <p className={style.SubTitle}>
        Get notified when new articles are published
      </p>
      <div className={style.InputGroup}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className={style.Input}
          required
        />
        <button type="submit" className={style.SubmitButton}>
          Send
        </button>
      </div>

      <div className={StatusClassName}>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </form>
  );
};

export default EmailSubscriptionForm;
