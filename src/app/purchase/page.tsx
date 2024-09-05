// app/purchase/page.tsx

"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PurchasePage() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams) {
      setProduct(searchParams.get('product'));
    }
  }, [searchParams]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading purchase details...</div>}>
      <div>
        <h1>購入ありがとうございました</h1>
        <p>{product} をご購入いただき、ありがとうございました。</p>
        <Link href="/">
          <a>製品一覧に戻る</a>
        </Link>
      </div>
    </Suspense>
  );
}
