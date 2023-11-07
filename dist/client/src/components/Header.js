"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gql_png_1 = __importDefault(require("../assets/gql.png"));
const Header = () => {
    return (<nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={gql_png_1.default} alt='gql logo' className='mr-2'/>
            <div>MERN Project Mgmt</div>
          </div>
        </a>
      </div>
    </nav>);
};
exports.default = Header;
