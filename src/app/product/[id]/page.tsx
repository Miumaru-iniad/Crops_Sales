"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// 仮の製品データを追加
const products = {
  tomato: {
    name: '赤羽トマト（種子）',
    description: '新鮮な赤羽産のトマトの種子です。',
    image: '/images/tomato.jpg', // 実際の画像パスを設定
  },
  soil: {
    name: 'INIA土',
    description: '農業に最適な高品質な土。',
    image: '/images/soil.jpg',
  },
  'bug-blocker': {
    name: 'INIAD-BUG-BLOCKER',
    description: '害虫から作物を守る防護剤。',
    image: '/images/bug-blocker.jpg',
  },
  up: {
    name: 'INIAD-UP',
    description: '植物の成長を促進する肥料。',
    image: '/images/up.jpg',
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // URL から ID を取得
  const product = products[id as keyof typeof products]; // 該当する製品データを取得

  const [quantity, setQuantity] = useState(1);

  // 数量を増やす関数
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // 数量を減らす関数（最低1に設定）
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <div>製品が見つかりません。</div>; // 製品が見つからない場合のエラーメッセージ
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" height="300" />
      <p>{product.description}</p>

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


