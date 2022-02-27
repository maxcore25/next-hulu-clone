import Image from 'next/image';

const Header = () => {
  return (
    <header className=''>
      <h1>This is header</h1>
      <Image
        src='https://links.papareact.com/ua6'
        width={100}
        height={1000}
        alt='hello'
      />
    </header>
  );
};

export default Header;
