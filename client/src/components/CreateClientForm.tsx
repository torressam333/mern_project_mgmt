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
    </form>
  );
};

export default CreateClientForm;
