// app/purchase/page.tsx
"use client";

import Link from 'next/link';
import Header from '../components/Header'; // ヘッダーコンポーネントをインポート

export default function PurchasePage() {
  return (
    <div>
      {/* ヘッダーを追加 */}
      <Header />

      <h1>購入ありがとうございました</h1>
      <Link href="/">
        <a>製品一覧に戻る</a>
      </Link>
    </div>
  );
}

