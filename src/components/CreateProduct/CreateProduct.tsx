import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../../types/products';
import ErrorMessage from '../Error/ErrorMessage';

const productData: IProduct = {
  id: 100,
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  }
};

type CreateProductProps = {
  onCreate: (product: IProduct) => void
}

const CreateProduct: React.FC<CreateProductProps> = ({ onCreate }) => {

  const [value, setValue] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const sunmitHandler = async(event: React.FormEvent) => {
    event.preventDefault();

    setErrorValue('');

    if(value.trim().length === 0) {
      setErrorValue('Please, enter a valid titlle');
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
  
    onCreate(response.data);
  };
  return (
    <form
      onSubmit={sunmitHandler}
    >
      <input 
        type="text"
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder='Enter product title'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {errorValue && <ErrorMessage error={errorValue} />}
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400 hover:bg-green-400'
      >Create</button>
      
    </form>
  );
};

export default CreateProduct;