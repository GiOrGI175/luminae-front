import Image from 'next/image';

export default function Favorites() {
  return (
    <button className='w-[100px] flex'>
      <Image src='/svg/Favorides.svg' width={24} height={24} alt='avatar' />
      <span className='ml-1 lato font-medium text-[14px] text-white'>
        Favorites
      </span>
    </button>
  );
}
