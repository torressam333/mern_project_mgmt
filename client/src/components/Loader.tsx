import { ReactElement } from 'react';

const Loader = (): ReactElement => {
  return (
    <div className='d-flex justify-content-center' data-testid='loader'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </div>
  );
};

export default Loader;
