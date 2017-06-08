import axios from 'axios';

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
  axios.delete('/session')
);

export const signIn = (user) => (
  axios.post('/session')
);
