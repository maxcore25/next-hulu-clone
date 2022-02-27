import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className=''>
      <h1>This is header</h1>
      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='hello'
      />
    </header>
  );
};

export default Header;
