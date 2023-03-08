import { useState } from 'react';
import { IFormProps } from 'interfaces/formInterfaces';

const useStateForm = ({ initialState }: IFormProps) => {
      const [state, setState] = useState({ ...initialState });

      const handleChange = ({
        target,
      }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = target;
        const newValue = type === 'checkbox' ? checked : value;
        setState(prevState => ({
          ...prevState,
          [name]: newValue,
        }));
      };
  return { state, handleChange };
};

export default useStateForm;
