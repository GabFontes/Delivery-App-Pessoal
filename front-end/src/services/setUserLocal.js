const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const setIsLogger = (bool) => localStorage.setItem('isLogged', JSON.stringify(bool));

const getIsLogger = () => JSON.parse(localStorage.getItem('isLogged'));

if (!getIsLogger()) {
  setIsLogger(false);
}

const getUser = () => JSON.parse(localStorage.getItem('user'));

const deleteKeyLocal = (key) => localStorage.removeItem(key);

export { saveUser, deleteKeyLocal, setIsLogger, getUser, getIsLogger };
