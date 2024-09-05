// app/purchase/page.tsx
"use client";  // これを追加
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PurchasePage() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

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
