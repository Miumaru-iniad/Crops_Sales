"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PurchasePage() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<string | null>(null);

  useEffect(() => {
    setProduct(searchParams.get('product'));
  }, [searchParams]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>購入ありがとうございました</h1>
      <p>{product} をご購入いただき、ありがとうございました。</p>
      <Link href="/">
        <a>製品一覧に戻る</a>
      </Link>
    </div>
  );
}
