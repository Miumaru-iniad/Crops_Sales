// app/product/[id]/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  // 数量を増やす関数
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // 数量を減らす関数（最低1に設定）
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div>
      <h1>製品詳細</h1>
      <p>ここに製品の説明が入ります。</p>

      {/* 購入数を決める部分 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      {/* 購入ボタン */}
      <Link href="/purchase">
        <button style={{ marginTop: '20px' }}>買う</button>
      </Link>
    </div>
  );
}

