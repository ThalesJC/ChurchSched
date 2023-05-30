import { useContext } from 'react';
import MyContext from './myContext';

export const useMyContext = () => useContext(MyContext);