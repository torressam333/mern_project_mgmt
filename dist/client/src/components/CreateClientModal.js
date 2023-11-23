"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const CreateClientModal = () => {
    const [show, setShow] = (0, react_1.useState)(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
      <react_bootstrap_1.Button variant='primary' onClick={handleShow}>
        Create Client
      </react_bootstrap_1.Button>

      <react_bootstrap_1.Modal show={show} onHide={handleClose}>
        <react_bootstrap_1.Modal.Header closeButton>
          <react_bootstrap_1.Modal.Title>Modal heading</react_bootstrap_1.Modal.Title>
        </react_bootstrap_1.Modal.Header>
        <react_bootstrap_1.Modal.Body>
          Woohoo, you're reading this text in a modal!
          <input type='text'/>
          <input type='text'/>
          <input type='text'/>
        </react_bootstrap_1.Modal.Body>
        <react_bootstrap_1.Modal.Footer>
          <react_bootstrap_1.Button variant='secondary' onClick={handleClose}>
            Close
          </react_bootstrap_1.Button>
          <react_bootstrap_1.Button variant='primary' onClick={handleClose}>
            Save Changes
          </react_bootstrap_1.Button>
        </react_bootstrap_1.Modal.Footer>
      </react_bootstrap_1.Modal>
    </>);
};
exports.default = CreateClientModal;
