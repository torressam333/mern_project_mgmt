import LabelWithInput from './common/LabelWithInput';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const CreateClientForm = ({
  clientName,
  setClientName,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone,
}: CreateClientFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <LabelWithInput
        label='Client Name:'
        type='text'
        id='clientName'
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className='form-control mb-2'
      />
      <LabelWithInput
        label='Client Email:'
        type='text'
        id='clientEmail'
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className='form-control mb-2'
      />
      <LabelWithInput
        label='Client Phone:'
        type='text'
        id='clientPhone'
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
        className='form-control mb-2'
      />
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default CreateClientForm;
