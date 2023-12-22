type CreateClientFormProps = {
  clientName: string;
  setClientName: (value: string) => void;
  clientEmail: string;
  setClientEmail: (value: string) => void;
  clientPhone: string;
  setClientPhone: (value: string) => void;
};

type ClientProps = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};
