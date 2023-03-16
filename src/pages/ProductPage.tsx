import React, { useContext } from 'react';
import CreateProduct from '../components/CreateProduct/CreateProduct';
import ErrorMessage from '../components/Error/ErrorMessage';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import ProductList from '../components/ProductList';
import { ModalContext } from '../context/ModalContext';
import { useProduct } from '../hooks/useProduct';
import { IProduct } from '../types/products';

const ProductPage = () => {
  const { products, error, loading, addProduct } = useProduct();
  const { modal, open, close } = useContext(ModalContext);

  const createProductHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}

      {error && <ErrorMessage error={error} />}
      <ProductList product={products} />
      {modal && <Modal title="Create new Product" onModalClose={close} >
        <CreateProduct onCreate={createProductHandler} />
      </Modal>}

      <button 
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >+</button>
    </div>
  );
};

export default ProductPage;