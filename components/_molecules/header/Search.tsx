import Image from 'next/image';

export default function Search() {
  return (
    <button>
      <form>
        <input type='text' />
        <div>
          <input type='search' />
          <Image src='/svg/Arrow.svg' width={24} height={24} alt='arrow down' />
        </div>
        <Image
          src='/svg/Search.svg'
          width={20}
          height={20}
          alt='shearch icon'
        />
      </form>
    </button>
  );
}
