import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';

const CreateClientModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Create Client</div>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Client Form</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default CreateClientModal;
