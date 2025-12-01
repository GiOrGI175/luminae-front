import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <Image src='/svg/Logo.svg' width={175} height={33} alt='logo' />
        <Search />
      </div>
      <div></div>
    </header>
  );
}
