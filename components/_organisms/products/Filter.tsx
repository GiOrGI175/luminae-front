import BrandSearch from '@/components/_molecules/products/BrandSearch';
import Model from '@/components/_molecules/products/Model';
import Image from 'next/image';
import Style from './Style';
import Colors from './Colors';
import Size from './Size';
import Price from './Price';

export default function Filter() {
  return (
    <div className='max-w-[263px] w-full flex flex-col justify-center'>
      <div className='h-[55px] flex items-center'>
        <div className='mr-4'>
          <Image
            src='/svg/categoruLogo.svg'
            width={16}
            height={16}
            alt='logo'
          />
        </div>
        <span className='lato font-extrabold text-[16px] leading-5 text-[#262626] '>
          All Categories
        </span>
      </div>
      <BrandSearch />
      <Model />
      <Style />
      <Colors />
      <Size />
      <Price />
    </div>
  );
}
