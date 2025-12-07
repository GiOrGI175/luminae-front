import LanguageBtn from '@/components/_atoms/footer/LanguageBtn';
import Input from '@/components/_molecules/footer/Input';
import Image from 'next/image';
import React from 'react';

const footerLinks = [
  {
    title: 'Company',
    items: ['About Us', 'Our Store', 'Contact us'],
  },
  {
    title: 'Career Opportunities',
    items: ['Selling Programs', 'Advertise', 'Cooperation'],
  },
  {
    title: 'How to Buy',
    items: [
      'Making Payments',
      'Delivery Options',
      'Buyer Protection',
      'New User Guide',
    ],
  },
  {
    title: 'Help',
    items: ['Contacts Us', 'FAQ', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className='w-full mt-[155px] flex flex-col  items-center'>
      <div className='relative w-full h-[362px] max-xl:h-[557px] flex flex-col items-center bg-[#D1E2EB]'>
        <div className='max-w-[889px] max-xl:max-w-[440px] max-md:w-[362px]  w-full mt-[130px] flex flex-wrap justify-between gap-10  '>
          {footerLinks.map((col) => (
            <div
              key={col.title}
              className='flex flex-col max-xl:w-[200px] max-md:w-[150px]'
            >
              <h4 className='mb-[25px] lato font-bold text-[14px] leading-5 text-[#262626]'>
                {col.title}
              </h4>
              {col.items.map((item) => (
                <span
                  key={item}
                  className='lato text-[14px] font-medium leading-5 text-[#555555] cursor-pointer mb-[15px]'
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className='max-md:hidden absolute top-[-25%] translate-x--1/2 max-w-[571px] w-full h-[187px] py-8 flex flex-col items-center justify-between rounded-lg bg-[#7296AB]'>
          <h4 className='lato text-[32px] font-bold leading-5 text-white'>
            Luminae Store
          </h4>
          <p className='lato text-[16px] font-normal leading-5 text-white'>
            Register your email not to miss the last minutes off+ Free delivery
          </p>
          <Input />
        </div>
      </div>
      <div className=' max-w-[1440px] w-full flex justify-center px-5'>
        <div className='max-w-[1260px]  w-full flex flex-col'>
          <div className='max-md:hidden w-full h-[42px] mt-6 flex justify-between border-b-2 border-[#D9D9D9]'>
            <div className='flex gap-6'>
              <div>
                <Image
                  src='/svg/Logo 1.svg'
                  width={62}
                  height={19}
                  alt='icon'
                />
              </div>
              <div>
                <Image
                  src='/svg/image-113.svg'
                  width={38}
                  height={30}
                  alt='icon'
                />
              </div>
              <div>
                <Image
                  src='/svg/Logo 3.svg'
                  width={71}
                  height={19}
                  alt='icon'
                />
              </div>
            </div>
            <div>
              <LanguageBtn />
            </div>
          </div>
          <div className='max-md:hidden w-full h-[69px] mt-3 mb-6 flex justify-between items-center'>
            <p className='lato font-medium text-[14px] text-[#262626] leading-5'>
              165-179 Forster Road City of Monash, Melbourne, Australia
            </p>
            <p className='lato font-medium text-[14px] text-[#9D9D9D] leading-5'>
              ©2023 Copyright in reserved for lumine shop
            </p>
            <div className='flex gap-6'>
              <div>
                <Image
                  src='/svg/instagramf.svg'
                  width={24}
                  height={24}
                  alt='icon'
                />
              </div>
              <div>
                <Image
                  src='/svg/facebookf.svg'
                  width={24}
                  height={24}
                  alt='icon'
                />
              </div>
              <div>
                <Image
                  src='/svg/telegramf.svg'
                  width={24}
                  height={24}
                  alt='icon'
                />
              </div>
            </div>
          </div>
          <div className='md:hidden h-[78px] pt-6 pb-[50px] flex justify-center gap-6'>
            <div>
              <Image src='/svg/Logo 1.svg' width={62} height={19} alt='icon' />
            </div>
            <div>
              <Image
                src='/svg/image-113.svg'
                width={38}
                height={30}
                alt='icon'
              />
            </div>
            <div>
              <Image src='/svg/Logo 3.svg' width={71} height={19} alt='icon' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
