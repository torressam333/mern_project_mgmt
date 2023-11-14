"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Loader = () => {
    return (<div className='d-flex justify-content-center' data-testid='loader'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </div>);
};
exports.default = Loader;
