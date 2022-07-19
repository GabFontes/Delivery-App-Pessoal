const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const deleteKeyLocal = (key) => localStorage.removeItem(key);

export { saveUser, deleteKeyLocal };
