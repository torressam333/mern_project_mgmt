"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const react_bootstrap_1 = require("react-bootstrap");
const CreateClientForm_1 = __importDefault(require("./CreateClientForm"));
const CreateClientModal = () => {
    const [show, setShow] = (0, react_1.useState)(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Create Client Form (child) State
    const [clientName, setClientName] = (0, react_1.useState)('');
    return (<>
      <react_bootstrap_1.Button variant='primary' onClick={handleShow} data-testid='create-client-button'>
        <div className='d-flex align-items-center'>
          <fa_1.FaUser className='icon'/>
          <div>Create Client</div>
        </div>
      </react_bootstrap_1.Button>

      <react_bootstrap_1.Modal show={show} onHide={handleClose}>
        <react_bootstrap_1.Modal.Header closeButton>
          <react_bootstrap_1.Modal.Title>Create Client Form</react_bootstrap_1.Modal.Title>
        </react_bootstrap_1.Modal.Header>
        <react_bootstrap_1.Modal.Body>
          <CreateClientForm_1.default clientName={clientName} setClientName={setClientName}/>
        </react_bootstrap_1.Modal.Body>
      </react_bootstrap_1.Modal>
    </>);
};
exports.default = CreateClientModal;
