import gqlLogo from '../assets/gql.png';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={gqlLogo} alt='gql logo' className='mr-2' />
            <div>MERN Project Mgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
