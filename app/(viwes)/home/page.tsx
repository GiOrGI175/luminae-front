import FlashSales from '@/components/_organisms/home/FlashSales';
import OfferSection from '@/components/_organisms/home/OfferSection';
import Posters from '@/components/_organisms/home/Posters';
import Top100 from '@/components/_organisms/home/Top100';
import Trending from '@/components/_organisms/home/Trending';

export default function page() {
  return (
    <div>
      <OfferSection />
      <FlashSales />
      <Trending />
      <Top100 />
      <Posters />
    </div>
  );
}
