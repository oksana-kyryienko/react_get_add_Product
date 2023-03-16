import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../types/products';


export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product]);
  }


  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);

      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=10'
      );
      setProducts(response.data);
  
      setLoading(false);

    } catch (e) {
      setLoading(false);

      const error = e as AxiosError;
      setError(error.message);
    }
   
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct };
}