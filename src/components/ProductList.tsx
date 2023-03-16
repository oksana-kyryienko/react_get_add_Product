import React from 'react';
import { IProduct } from '../types/products';
import Product from './Product';

type Props = {
  product: IProduct[]
}

const ProductList: React.FC<Props> = ({product}) => {

  
  return (
    <div>
      <ul>
        {product.map((pr) => (
          <li key={pr.id}>
            <Product product={pr} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;