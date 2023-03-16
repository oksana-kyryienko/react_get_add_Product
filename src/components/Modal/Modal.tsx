import React from 'react';

type ModalProps = {
  children: React.ReactNode,
  title: string,
  onModalClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, title, onModalClose }) => {
  return (
    <>
      <div 
        className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'
        onClick={onModalClose}
      >
      
      </div>
      <div className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/3 translate-x-1/5'>
        <h1 className='text-2xl text-center mb-2'>{title}</h1>
        {children}

      </div>
    </>
  );
};

export default Modal;