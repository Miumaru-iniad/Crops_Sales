"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

export default function PurchasePage() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
