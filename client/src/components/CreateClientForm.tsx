import LabelWithInput from "./common/LabelWithInput";
import { CREATE_CLIENT } from "../mutations/clientMutations";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

type ClientCacheBustType = ClientProps["client"][];

const CreateClientForm = ({
  clientName,
  setClientName,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone
}: CreateClientFormProps) => {
  const [addClient, { loading }] = useMutation(CREATE_CLIENT, {
    variables: { name: clientName, email: clientEmail, phone: clientPhone },
    update(cache, { data: { addClient } }): void {
      // Update cache to include newly created client
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as {
        clients: ClientCacheBustType;
      };

      // Return new cahce with new client included
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...clients, addClient]
        }
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!clientName || !clientEmail || !clientPhone) {
      // TODO: add UI validation msg
      console.log("missing fields");
    }

    addClient();
    setClientName("");
    setClientEmail("");
    setClientPhone("");
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
