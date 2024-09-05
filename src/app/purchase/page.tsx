// app/purchase/page.tsx
import Link from 'next/link';

export default function PurchasePage() {
  return (
    <div>
      <h1>購入ありがとうございました</h1>
      <Link href="/">
        <a>製品一覧に戻る</a>
      </Link>
    </div>
  );
}

