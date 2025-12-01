import Image from 'next/image';

export default function Search() {
  return (
    <form className='ml-[30px] max-w-[345px] w-full h-10 py-2 px-3 border border-[#E9E9E9]'>
      <div className='flex'>
        <input
          type='text'
          placeholder='Search Products'
          className='outline-none bg-transparent text-sm'
        />
        <div className='lato flex'>
          <select className='bg-transparent text-sm outline-none text-[14px] appearance-none'>
            <option value=''>All categories</option>
            <option value='Man'>Man</option>
            <option value='Woman'>Woman</option>
          </select>{' '}
          <Image src='/svg/Arrow.svg' width={24} height={24} alt='arrow down' />
        </div>
        <button type='submit' className='border-l border-l-[#E9E9E9] ml-3 pl-3'>
          <Image
            src='/svg/Search.svg'
            width={20}
            height={20}
            alt='shearch icon'
          />
        </button>
      </div>
    </form>
  );
}
