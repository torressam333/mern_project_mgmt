import LabelWithInput from "./common/LabelWithInput";

const CreateClientForm = ({
  clientName,
  setClientName,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone
}: CreateClientFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(clientName, clientEmail, clientPhone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelWithInput
        label="Client Name:"
        type="text"
        id="clientName"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="form-control mb-2"
        data-testid="client-name"
        required
      />
      <LabelWithInput
        label="Client Email:"
        type="text"
        id="clientEmail"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className="form-control mb-2"
        data-testid="client-email"
        required
      />
      <LabelWithInput
        label="Client Phone:"
        type="tel"
        id="clientPhone"
        value={clientPhone}
        onChange={(e) => setClientPhone(e.target.value)}
        className="form-control mb-2"
        data-testid="client-phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreateClientForm;
