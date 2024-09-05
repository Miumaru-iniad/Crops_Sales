"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  description: string;
  image: string;
}

const products: Record<string, Product> = {
  tomato: { name: '赤羽トマト（種子）', description: '新鮮な赤羽産のトマトの種子です。', image: '/images/tomato.jpg' },
  soil: { name: 'INIA土', description: '農業に最適な高品質な土。', image: '/images/soil.jpg' },
  'bug-blocker': { name: 'INIAD-BUG-BLOCKER', description: '害虫から作物を守る防護剤。', image: '/images/bug-blocker.jpg' },
  up: { name: 'INIAD-UP', description: '植物の成長を促進する肥料。', image: '/images/up.jpg' },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

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
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover"
      />
      <p>{product.description}</p>

      {/* 購入数を決める部分 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <Link href={`/purchase?product=${product.name}`}>
        <button style={{ marginTop: '20px' }}>買う</button>
      </Link>
    </div>
  );
}
