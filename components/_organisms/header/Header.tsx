import NavBar from '@/components/_molecules/header/NavBar';
import Search from '@/components/_molecules/header/Search';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full flex justify-center'>
      <div className='max-w-[1440px] h-24 w-full flex justify-center items-center'>
        <div className='max-w-[1260px]  w-full flex justify-between gap-20'>
          <div className='flex w-full'>
            <Image src='/svg/Logo.svg' width={175} height={33} alt='logo' />
            <Search />
          </div>
          <NavBar />
        </div>
      </div>
      <div></div>
    </header>
  );
}
