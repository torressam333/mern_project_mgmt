import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import CreateClientForm from './CreateClientForm';

const CreateClientModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Create Client Form (child) State
  const [clientName, setClientName] = useState<string>('');

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        data-testid='create-client-button'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Create Client</div>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Client Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateClientForm
            clientName={clientName}
            setClientName={setClientName}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateClientModal;
