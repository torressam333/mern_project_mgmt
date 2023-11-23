import Header from './components/Header';
import Clients from './components/Clients';
import CreateClientModal from './components/CreateClientModal';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <CreateClientModal />
        <Clients />
      </div>
    </>
  );
};

export default App;
