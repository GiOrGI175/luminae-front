import Image from 'next/image';

export default function LanguageBtn() {
  return (
    <button className='h-5 lato flex'>
      <select className='bg-transparent text-sm outline-none text-[12px]  text-white appearance-none '>
        <option value='English'>English</option>
        <option value='Georgian'>Georgian</option>
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
