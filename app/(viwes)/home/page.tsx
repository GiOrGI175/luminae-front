import Posters1 from '@/components/_molecules/home/Posters1';
import Posters2 from '@/components/_molecules/home/Posters2';
import FlashSales from '@/components/_organisms/home/FlashSales';
import OfferSection from '@/components/_organisms/home/OfferSection';
import Posters from '@/components/_organisms/home/Posters';
import Top100 from '@/components/_organisms/home/Top100';
import Trending from '@/components/_organisms/home/Trending';

export default function page() {
  return (
    <div>
      <section className='w-full md:hidden flex flex-col  items-center mt-[73px]'>
        <div className='max-w-[1440px] w-full flex justify-center items-center px-5 '>
          <div className='max-w-[1260px]  w-full flex flex-col gap-5'>
            <Posters1 />
            <Posters2 />
          </div>
        </div>
      </section>
      <OfferSection />
      <FlashSales />
      <Trending />
      <Top100 />
      <Posters />
    </div>
  );
}
