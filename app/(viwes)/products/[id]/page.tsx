'use client';

import MiniNav from '@/components/_organisms/products/MiniNav';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams<{ id?: string }>();

  return (
    <div>
      <MiniNav />
    </div>
  );
}
