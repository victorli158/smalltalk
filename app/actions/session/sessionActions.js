import * as APIUtil from './sessionUtil';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_KEY = 'RECEIVE_KEY';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveKey = (key) => ({
  type: RECEIVE_KEY,
  key: key
});

export const removeUser = () => ({
  type: REMOVE_USER
});

export const signIn = (user) => (dispatch) => (
   APIUtil.signIn(user)
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then((current_user) => {
          dispatch(receiveUser(current_user));
          console.log("USER" + current_user);
        })
        .then(()=> {
          dispatch(getSessionKey());
        });
      }
      else{
        resp.json()
        .then((err)=>{
          console.log(err.errors);
        });
      }
    })
);

export const getSessionKey = () => (dispatch) => (
   APIUtil.getSessionKey()
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then((key) => {
          dispatch(receiveKey(key.session_key));
        });
      }
      else{
        resp.json()
        .then((err)=>{
          console.log(err.errors);
        });
      }
    })
);

export const signOut = () => (dispatch) => (
  APIUtil.signOut().then(() => dispatch(removeUser))
);

export const signUp = (user) => (dispatch) => {
  return APIUtil.signUp(user)
  .then(resp => {
    if (resp.ok){
      resp.json()
      .then((current_user) => {
        dispatch(receiveUser(current_user));
      })
      .then(()=> {
        dispatch(getSessionKey());
      });
    }
    else{
      resp.json()
      .then((err)=>{
        throw `${err}`;
      });
    }
  }, ()=>console.log('i failed'));

};
