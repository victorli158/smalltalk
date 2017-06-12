// import axios from 'axios';

export const signUp = (user) => (
  fetch(
    'https://flex-aa.herokuapp.com/signup',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        user
      )
    }
  )
);

export const signOut = () => (
  fetch(
    'https://flex-aa.herokuapp.com/session',
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
  )
);

export const signIn = (user) => (
  fetch(
    'https://flex-aa.herokuapp.com/session',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        user
      )
    }
  )
);
