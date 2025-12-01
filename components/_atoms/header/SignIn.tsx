import Image from 'next/image';

export default function SignIn() {
  return (
    <button className='w-[100px] flex'>
      <Image src='/svg/Sign in.svg' width={24} height={24} alt='avatar' />
      <span className='ml-1 lato font-medium text-[14px] text-white'>
        Sign in
      </span>
    </button>
  );
}
