// app/purchase/page.tsx
"use client";

import Link from 'next/link';
import Header from '../components/Header'; // ヘッダーコンポーネントをインポート

export default function PurchasePage() {
  return (
    <div>
      {/* ヘッダーを追加 */}
      <Header />

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {/* 購入ありがとうございましたを大きく、中央に配置 */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>購入ありがとうございました</h1>
        
        {/* 製品一覧に戻るリンクを青字で表示 */}
        <Link href="/">
          <a style={{ color: 'blue', fontSize: '1.2rem', display: 'block', marginTop: '20px' }}>
            製品一覧に戻る
          </a>
        </Link>
      </div>
    </div>
  );
}

