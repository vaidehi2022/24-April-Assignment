
import {  useDispatch } from 'react-redux';
import { updateButton } from '../store/index';

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateButton({ name }));
  };

  return <button onClick={handleClick}>{name}</button>;
};

export default Button


