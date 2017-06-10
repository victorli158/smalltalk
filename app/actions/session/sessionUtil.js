// import axios from 'axios';

export const signUp = (user) => (
  fetch(
    'http://localhost:8000/signup',
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
    'http://localhost:8000/session',
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
    'http://localhost:8000/session',
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
