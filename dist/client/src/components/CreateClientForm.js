"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LabelWithInput_1 = __importDefault(require("./common/LabelWithInput"));
const CreateClientForm = ({ clientName, setClientName, clientEmail, setClientEmail, clientPhone, setClientPhone, }) => {
    return (<form>
      <p className='mb-3'>
        <label htmlFor='clientName' className='form-label'>
          Client Name:
        </label>
        <input type='text' className='form-control' id='clientName' value={clientName} onChange={(e) => setClientName(e.target.value)}/>
      </p>
      <LabelWithInput_1.default label='Client Email:' type='text' id='clientEmail' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className='form-control'/>
    </form>);
};
exports.default = CreateClientForm;
