import React from 'react';
import submitForm from './submitForm.js';

export default function ContactForm() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      style={{display: 'flex', flexDirection: 'column', width: 'fit-content', gap: '10px'}}
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      >
      <label htmlFor="name-input">Name</label>
      <input id="name-input" name="name" type="text" />

      <label htmlFor="email-input">Email</label>
      <input id="email-input" name="email" type="email" />

      <label htmlFor="message-input">Message</label>
      <textarea id="message-input" name="message" type="text" />

      <button type="submit" style={{width: 'fit-content'}}>Send</button>
    </form>
  );
}
