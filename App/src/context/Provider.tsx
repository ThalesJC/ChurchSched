import { useState } from 'react';
import MyContext from './myContext';

interface IProps {
  children: React.ReactNode;
}

function Provider({ children }: IProps) {
  const [state, _setState] = useState({});

  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;