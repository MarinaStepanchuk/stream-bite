const getTokenFromLocalStorage = (): string => {
  const data = localStorage.getItem('token');
  const token = data ? JSON.parse(data) : '';
  return token;
};

const setTokenToLocalStorage = (token: string): void => {
  localStorage.setItem('token', JSON.stringify(token));
};

const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem('token');
};

export { getTokenFromLocalStorage, setTokenToLocalStorage, removeTokenFromLocalStorage };
