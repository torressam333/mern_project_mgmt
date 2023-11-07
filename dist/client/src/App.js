"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("./components/Header"));
const Clients_1 = __importDefault(require("./components/Clients"));
const App = () => {
    return (<>
      <Header_1.default />
      <div className='container'>
        <Clients_1.default />
      </div>
    </>);
};
exports.default = App;
