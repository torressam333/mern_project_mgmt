"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LabelWithInput_1 = __importDefault(require("./common/LabelWithInput"));
const handleSubmit = (e) => {
    e.preventDefault();
};
const CreateClientForm = ({ clientName, setClientName, clientEmail, setClientEmail, clientPhone, setClientPhone, }) => {
    return (<form onSubmit={handleSubmit}>
      <LabelWithInput_1.default label='Client Name:' type='text' id='clientName' value={clientName} onChange={(e) => setClientName(e.target.value)} className='form-control mb-2' data-testid='client-name'/>
      <LabelWithInput_1.default label='Client Email:' type='text' id='clientEmail' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className='form-control mb-2' data-testid='client-email'/>
      <LabelWithInput_1.default label='Client Phone:' type='text' id='clientPhone' value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className='form-control mb-2' data-testid='client-phone'/>
      <button className='btn btn-primary'>Submit</button>
    </form>);
};
exports.default = CreateClientForm;
