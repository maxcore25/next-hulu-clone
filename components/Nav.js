import requests from '../utils/requests';

const Nav = () => {
  return (
    <nav>
      <div className='flex'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className='cursor-pointer transition duration-100 transform hover:scale-125'>
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
