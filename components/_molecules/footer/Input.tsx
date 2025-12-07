import Image from 'next/image';

export default function Input() {
  return (
    <form className='max-w-[268px] w-full  py-2'>
      <div className='h-9 flex rounded-sm overflow-hidden'>
        <input
          type='text'
          placeholder='Enter your email'
          className='outline-none bg-white text-sm w-full h-full pl-3 lato'
        />

        <button type='submit' className='bg-white pr-2.5'>
          <Image
            src='/svg/send.svg'
            width={16}
            height={16}
            alt='shearch icon'
          />
        </button>
      </div>
    </form>
  );
}
