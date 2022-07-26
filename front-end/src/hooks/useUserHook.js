import { useState, useEffect } from 'react';
import { getUser } from '../services/setUserLocal';

export default function useSetUser(isLogged) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const setUserProvider = async () => {
      try {
        const userLocal = getUser();
        setUser(userLocal);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      setUserProvider();
    }
  }, [isLogged]);
  return [user];
}
