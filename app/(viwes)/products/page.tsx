import Filter from '@/components/_organisms/products/Filter';
import MiniNav from '@/components/_organisms/products/MiniNav';
import Sort from '@/components/_organisms/products/Sort';

export default function page() {
  return (
    <div>
      <MiniNav />
      <Sort />
      <section className='w-full flex justify-center'>
        <div className='max-w-[1440px] w-full flex  justify-center px-5'>
          <div className='max-w-[1260px] w-full flex'>
            <div className='flex-1 border pt-9  '>
              <Filter />
            </div>
            <div className='flex-3 border '></div>
          </div>
        </div>
      </section>
    </div>
  );
}
