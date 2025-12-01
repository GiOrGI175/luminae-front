'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const womenMenu = [
    {
      title: 'SHOE & BAG',
      items: ['Casual Shoes', 'Boots', 'Sandals', 'Slippers'],
    },
    {
      title: 'HOME TEXTILE',
      items: ['Bedding', 'Pillows', 'Handkerchief Towels', 'Curtain'],
    },
    {
      title: 'PARTY SUPPLIES',
      items: [
        'Event & Party',
        'Christmas',
        'Artificial Decorations',
        'Wedding',
      ],
    },
    {
      title: 'LUXURY & DESIGNER',
      items: ['Towels', 'Bathroom Scales', 'Bath Mats', 'Shower Caps'],
    },
    {
      title: 'COSMETICS',
      items: [
        'Shampoo and Conditioner',
        'Styling Products',
        'Hair Accessories',
        "Men's Grooming",
      ],
    },
    {
      title: 'SPORT & OUTDOORS',
      items: [
        'Team Sports',
        'Water Sports',
        'Outdoor Recreation',
        'Fitness Equipment',
      ],
    },
    {
      title: 'CLOTHES',
      items: [
        'Bottoms',
        "Women's Clothing",
        'T-Shirts and Tops',
        'Dresses',
        'Outerwear',
        'Formal Wear',
        'Casual Wear',
        'Seasonal Collections',
        'Sports Bras',
        'Workout Tops',
        'Fall Wardrobe',
      ],
    },
  ];

  const menuItems = [
    'Male',
    'Mother-Child',
    'Home & Furniture',
    'Super market',
    'Cosmetics',
    'Shoe & Bag',
    'Electronic',
    'Sport & Outdoor',
    'Best seller',
  ];

  return (
    <>
      <button onClick={() => setOpen((pv) => !pv)}>
        <Image src='/svg/Menue icon.svg' width={21} height={14} alt='menu' />
      </button>

      {open && (
        <div className='fixed inset-0 overflow-y-auto z-50 flex flex-col'>
          <div className='relative w-full flex justify-center items-center pt-8 pb-[43px] bg-white '>
            <button
              onClick={() => setOpen(false)}
              className='absolute left-5 top-8 '
            >
              <Image src='/svg/remove.svg' width={24} height={24} alt='close' />
            </button>
            <span className='text-[22px] font-bold'>Menu</span>
          </div>

          <div className='px-4 pt-6 bg-[#ededed]'>
            <div className='pb-5'>
              <span className=' text-[14px] font-bold text-[#FF7A00]'>
                Women
              </span>
            </div>
            <div className='xl:translate-x-5 max-w-[1067px] w-full grid grid-cols-[repeat(2,145px)] grid-rows-[repeat(4,170px)] gap-10 p-6 bg-white  shadow mb-5'>
              {womenMenu.map((col) => (
                <div
                  key={col.title}
                  className={`' w-[145px] flex flex-col gap-2 ${
                    col.title === 'CLOTHES'
                      ? ' row-start-3 row-end-4 col-start-2 col-end-2'
                      : ''
                  }`}
                >
                  <h3 className='font-medium text-[15px] text-black'>
                    {col.title}
                  </h3>

                  {col.items.map((item) => (
                    <span
                      key={item}
                      className='max-w-[145px] w-full text-[14px] text-[#555] cursor-pointer hover:text-[#FF7A00]'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div>
              {menuItems.map((item) => (
                <div key={item} className='pb-5 '>
                  <span className='lato text-[14px] font-bold text-[#555555]'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className='px-5 pt-8 pb-5 flex justify-between bg-white '>
              <span>Login/register</span>
              <Image
                src='/svg/direction-right 01.svg'
                width={24}
                height={24}
                alt='arrow'
              />
            </div>
            <div className='px-5 pb-5 flex justify-between bg-white '>
              <span>Help & Support</span>
              <Image
                src='/svg/direction-right 01.svg'
                width={24}
                height={24}
                alt='arrow'
              />
            </div>
            <div className='px-5 pb-5 flex justify-between bg-white '>
              <span>About us</span>
              <Image
                src='/svg/direction-right 01.svg'
                width={24}
                height={24}
                alt='arrow'
              />
            </div>
            <div className='px-5 pb-5 flex justify-between bg-white '>
              <span>Blog</span>
              <Image
                src='/svg/direction-right 01.svg'
                width={24}
                height={24}
                alt='arrow'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
