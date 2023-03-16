import React, { useState } from 'react';
import { IProduct } from '../types/products';

type Props = {
  product: IProduct;
};

const Product: React.FC<Props> = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <p>{category}</p>
      <img src={image} alt={title} className="w-1/6" />
      <p>{title}</p>
      <p className="font-bold">{price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        {details ? 'Hide details' : 'Show Details'}
      </button>

      {details && <p>{description}</p>}
      <p>Rate: 
        {/* <span style={{fontWeight: 'bold'}}> */}
        {rating?.rate}
        {/* </span> */}
      </p>
    </div>
  );
};

export default Product;
