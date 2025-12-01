import Image from 'next/image';

export default function LanguageBtn() {
  return (
    <button className='w-[66px] h-5 lato flex'>
      <select className='bg-transparent  outline-none text-[12px]  text-white appearance-none '>
        <option value='English' className='text-black'>
          English
        </option>
        <option value='Georgian' className='text-black'>
          Georgian
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
