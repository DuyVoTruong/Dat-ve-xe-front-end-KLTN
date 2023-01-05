import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const userToken = localStorage.getItem('token');
    return userToken
  };

  const getAccount = () => {
    const account = JSON.parse(localStorage.getItem('account'));
    return account
  }

  const [token, setToken] = useState(getToken());
  const [account, setAccount] = useState(getAccount());

  const saveToken = userToken => {
    console.log(userToken)
    localStorage.setItem('token', userToken.jwtToken);
    localStorage.setItem('account', JSON.stringify(userToken.account));
    setToken(userToken.jwtToken);
    setAccount(userToken.account);
  };

  return {
    setToken: saveToken,
    token,
    account,
    setAccount,
  }
}