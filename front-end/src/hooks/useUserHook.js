import { useState, useEffect } from 'react';
import { getUser } from '../services/setUserLocal';

export default function useSetUser(isLogged) {
  const [user2, setUser] = useState([]);

  useEffect(() => {
    const setUserProvider = async () => {
      try {
        const userLocal = getUser();
        const { name, email, role } = userLocal;
        const { token } = userLocal;
        const user = { name, email, role };
        setUser({ user, token });
        // setUser(userLocal);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      setUserProvider();
    }
  }, [isLogged]);
  return [user2];
}
