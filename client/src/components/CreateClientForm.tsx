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
      <div className='mb-3'>
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
      </div>
    </form>
  );
};

export default CreateClientForm;
