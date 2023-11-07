import Header from './components/Header';
import Clients from './components/Clients';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Clients />
      </div>
    </>
  );
};

export default App;
