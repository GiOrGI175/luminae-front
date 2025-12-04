import FlashSales from '@/components/_organisms/home/FlashSales';
import OfferSection from '@/components/_organisms/home/OfferSection';
import Trending from '@/components/_organisms/home/Trending';

export default function page() {
  return (
    <div>
      <OfferSection />
      <FlashSales />
      <Trending />
    </div>
  );
}
