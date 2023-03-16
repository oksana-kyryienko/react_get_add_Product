import React from 'react';

type Error = {
  error: string;
}

const ErrorMessage: React.FC<Error> = ({error}) => {
  return (
    <div>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
};

export default ErrorMessage;