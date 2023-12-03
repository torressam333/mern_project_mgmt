import LabelWithInput from './common/LabelWithInput';

type CreateClientFormProps = {
  clientName: string;
  setClientName: (value: string) => void;
  clientEmail: string;
  setClientEmail: (value: string) => void;
  clientPhone: string;
  setClientPhone: (value: string) => void;
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
    <form>
      <p className='mb-3'>
        <label htmlFor='clientName' className='form-label'>
          Client Name:
        </label>
        <input
          type='text'
          className='form-control'
          id='clientName'
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </p>
      <LabelWithInput
        label='Client Email:'
        type='text'
        id='clientEmail'
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className='form-control'
      />
    </form>
  );
};

export default CreateClientForm;
