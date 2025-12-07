import Filter from '@/components/_organisms/products/Filter';
import MiniNav from '@/components/_organisms/products/MiniNav';
import Products from '@/components/_organisms/products/Products';
import Sort from '@/components/_organisms/products/Sort';
import { useProductsStore } from '@/store/useProductsStore';

export default function page() {
  return (
    <div>
      <MiniNav />
      <Sort />
      <section className='w-full flex justify-center'>
        <div className='max-w-[1440px] w-full flex  justify-center px-5'>
          <div className='max-w-[1260px] w-full flex'>
            <div className='max-sm:hidden max-w-[315px] w-full pt-9'>
              <Filter />
            </div>
            <div className='max-w-[945px] w-full'>
              <Products />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
