import Card from '@/components/_atoms/header/Card';
import Favorites from '@/components/_atoms/header/Favorites';
import LanguageBtn from '@/components/_atoms/header/LanguageBtn';
import SignIn from '@/components/_atoms/header/SignIn';
import ValuteBtn from '@/components/_atoms/header/ValuteBtn';
import Categories from '@/components/_molecules/header/Categories';
import Coupons from '@/components/_molecules/header/Coupons';
import Menu from '@/components/_molecules/header/Menu';
import NavBar from '@/components/_molecules/header/NavBar';
import Search from '@/components/_molecules/header/Search';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full flex flex-col  items-center'>
      <div className='max-w-[1440px] md:h-24 w-full flex justify-center items-center max-md:pt-8 px-5 md:px-[60px]'>
        <div className='max-w-[1260px]  w-full flex max-lg:flex-col justify-between max-lg:gap-3 gap-20'>
          <div className='flex w-full max-md:flex-col max-lg:justify-between'>
            <div className='max-md:flex max-md:justify-between'>
              <div className='hidden max-md:block'>
                <Menu />
              </div>
              <Image
                src='/svg/Logo.svg'
                width={175}
                height={33}
                alt='logo'
                className='max-md:hidden block'
              />
              <Image
                src='/svg/Luminae.svg'
                width={133}
                height={26}
                alt='logo'
                className='max-md:block hidden'
              />
              <div className='hidden max-md:block'>
                <Card />
              </div>
            </div>
            <div className='max-md:mt-12'>
              <Search />
            </div>
          </div>
          <NavBar />
        </div>
      </div>
      <div className='w-full max-lg:h-11 h-[78px] bg-[#262626] max-md:hidden flex justify-center '>
        <div className='max-w-[1440px]  w-full h-full flex justify-center items-center px-5 md:px-[60px]'>
          <div className='max-w-[1260px]  w-full h-full flex items-center justify-between'>
            <div className='flex items-center max-lg:gap-[90px]'>
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
              <div className='w-[145px]  h-5 flex gap-3'>
                <ValuteBtn />
                <LanguageBtn />
              </div>
            </div>
            <div className='hidden lg:block'>
              <Coupons />
            </div>
            <div className='flex gap-5'>
              <SignIn />
              <Favorites />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-md:hidden flex justify-center'>
        <div className='max-w-[1440px] w-full h-full flex justify-center items-center px-5 md:px-[60px]'>
          <div className='max-w-[1260px]  w-full h-full flex justify-center'>
            <Categories />
          </div>
        </div>
      </div>
    </header>
  );
}
