'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Categories() {
  const categories = [
    { title: 'Women', value: 'Women' },
    { title: 'Male', value: 'Male' },
    { title: 'Mother-Child', value: 'Mother-Child' },
    { title: 'Home & Furniture', value: 'Home & Furniture' },
    { title: 'Super market', value: 'Super market' },
    { title: 'Cosmetics', value: 'Cosmetics' },
    { title: 'Shoe & Bag', value: 'Shoe & Bag' },
    { title: 'Electronic', value: 'Electronic' },
    { title: 'Best seller', value: 'Best seller' },
  ];

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

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className='w-full flex flex-col mt-[45px] '>
      <div className='w-full h-[52px]   flex justify-between '>
        {categories.map((item) => (
          <span
            key={item.value}
            onClick={() => setOpen((pv) => !pv)}
            className='lato font-medium text-[14px] text-[#555555] hover:text-[#FF7A00] transition cursor-pointer'
          >
            {item.title}
          </span>
        ))}
      </div>
      {open && (
        <div
          ref={menuRef}
          className='xl:translate-x-5 max-w-[1067px] w-full grid grid-cols-[repeat(4,145px)]  xl:grid-cols-[repeat(5,145px)]
 grid-rows-2 gap-10 p-6 bg-white rounded-lg shadow'
        >
          {womenMenu.map((col) => (
            <div
              key={col.title}
              className={`' w-[145px] flex flex-col gap-2 ${
                col.title === 'CLOTHES'
                  ? ' row-start-1 row-end-3 col-start-4 col-end-4'
                  : ''
              }`}
            >
              <h3 className='max-w-[100px] w-full font-medium text-[15px] text-black'>
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
          <div className='max-xl:hidden block row-start-1 row-end-3 col-start-5 col-end-5 w-[278px] h-[340px] relative border rounded-xl'>
            <Image src='/img/women.png' fill alt='women img' />
          </div>
        </div>
      )}
    </div>
  );
}
