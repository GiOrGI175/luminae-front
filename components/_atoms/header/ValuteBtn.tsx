import Image from 'next/image';

export default function ValuteBtn() {
  return (
    <button className='w-[66px] h-5 lato flex justify-end'>
      <select className='bg-transparent  outline-none text-[12px]  text-white appearance-none '>
        <option value='USD' className='text-black'>
          USD
        </option>
        <option value='GEL' className='text-black'>
          GEL
        </option>
      </select>
      <Image
        src='/svg/Arrow_white.svg'
        width={16}
        height={16}
        alt='arrow down'
      />
    </button>
  );
}
