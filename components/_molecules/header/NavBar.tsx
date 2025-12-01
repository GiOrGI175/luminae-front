import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const navLinks = [
    { title: 'About us', link: 'about' },
    { title: 'Blog', link: 'blog' },
    { title: 'Contact us', link: 'contact' },
    { title: 'Help & support', link: 'support' },
  ];

  const socialLinks = [
    {
      title: 'instalgram',
      link: 'https://www.instagram.com/',
      icon: '/svg/Instagram.svg',
    },
    {
      title: 'facebook',
      link: 'https://www.facebook.com/',
      icon: '/svg/FB.svg',
    },
    {
      title: 'telegram',
      link: 'https://web.telegram.org/k/',
      icon: '/svg/Telegram.svg',
    },
  ];

  return (
    <nav className='w-full max-md:hidden flex justify-between'>
      <div className='max-w-[420px] w-full flex justify-between items-center'>
        {navLinks.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className='lato text-[14px] text-[#555555] '
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-3.5'>
        {socialLinks.map((item) => (
          <Link key={item.link} href={item.link} className='w-6 h-6 relative'>
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className='object-contain'
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
