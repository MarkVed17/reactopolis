import React, { useState } from 'react';

export const data = [
  {
    id: 1,
    mail: 'tanay@neog.camp',
  },
  {
    id: 2,
    mail: 'tanvi@neog.camp',
  },
  {
    id: 3,
    mail: 'akanksha@neog.camp',
  },
  {
    id: 4,
    mail: 'parul@neog.camp',
  },
  {
    id: 5,
    mail: 'kishan@neog.camp',
  },
];

export default function EmailSubscriber() {
  const [emailInput, setEmailInput] = useState('');
  const [isEmailFound, setIsEmailFound] = useState(false);

  function checkEmailSubscription() {
    const isEmailAlreadyPresent = data.find(
      (email) => email.mail === emailInput
    );
    setIsEmailFound(isEmailAlreadyPresent);
  }

  return (
    <div>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <button onClick={checkEmailSubscription}>Subscribe</button>
      <div>
        {isEmailFound
          ? 'You have already subscribed.'
          : 'Subscribed successfully!'}
      </div>
    </div>
  );
}
