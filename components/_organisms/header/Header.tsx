import LanguageBtn from '@/components/_atoms/header/LanguageBtn';
import ValuteBtn from '@/components/_atoms/header/ValuteBtn';
import NavBar from '@/components/_molecules/header/NavBar';
import Search from '@/components/_molecules/header/Search';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full flex flex-col justify-center'>
      <div className='max-w-[1440px] h-24 w-full flex justify-center items-center'>
        <div className='max-w-[1260px]  w-full flex justify-between gap-20'>
          <div className='flex w-full'>
            <Image src='/svg/Logo.svg' width={175} height={33} alt='logo' />
            <Search />
          </div>
          <NavBar />
        </div>
      </div>
      <div className='w-full h-[78px] bg-[#262626]'>
        <div className='max-w-[1440px] w-full h-full flex justify-center items-center'>
          <div className='max-w-[1260px]  w-full h-full flex items-center'>
            <div className='flex items-center'>
              <button className='flex'>
                <Image
                  src='svg/categories.svg'
                  width={24}
                  height={24}
                  alt='categories icon'
                />
                <span className='ml-1 lato font-bold text-[20px] text-white'>
                  Categories
                </span>
              </button>
              <div className='w-[145px] border border-white h-5'>
                <ValuteBtn />
                <LanguageBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
