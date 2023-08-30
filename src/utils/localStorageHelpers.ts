const getValueFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  const token = data ? JSON.parse(data) : '';
  return token;
};

const setValueToLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeValueFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export { getValueFromLocalStorage, setValueToLocalStorage, removeValueFromLocalStorage };
