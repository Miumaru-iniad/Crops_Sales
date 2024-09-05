"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header'; // ヘッダーコンポーネントをインポート

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}

// 各製品に単価を追加
const products: Record<string, Product> = {
  tomato: { name: '赤羽トマト（種子）', description: '新鮮な赤羽産のトマトの種子です。', image: '/images/tomato.jpg', price: 300 },
  soil: { name: 'INIA土', description: '農業に最適な高品質な土。', image: '/images/soil.jpg', price: 800 },
  'bug-blocker': { name: 'INIAD-BUG-BLOCKER', description: '害虫から作物を守る防護剤。', image: '/images/bug-blocker.jpg', price: 1200 },
  up: { name: 'INIAD-UP', description: '植物の成長を促進する肥料。', image: '/images/up.jpg', price: 1500 },
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

  // 総価格を計算
  const totalPrice = product.price * quantity;

  return (
    <div>
      {/* ヘッダーを追加 */}
      <Header />

      {/* 商品名を大きく表示 */}
      <h1 className="product-name">{product.name}</h1>

      {/* 商品画像 */}
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="product-image"
        />
      </div>

      {/* 商品説明 */}
      <p className="product-description">{product.description}</p>

      {/* 価格表示 */}
      <p className="product-price">価格: {product.price}円</p>

      {/* 購入数を決める部分と購入ボタンを中央寄せ */}
      <div className="purchase-container">
        <div className="quantity-container">
          {/* - ボタン */}
          <button className="decrease-button" onClick={decreaseQuantity}>
            -
          </button>

          {/* 数量 */}
          <span className="quantity">{quantity}</span>

          {/* + ボタン */}
          <button className="increase-button" onClick={increaseQuantity}>
            +
          </button>
        </div>

        {/* 総価格表示 */}
        <p className="total-price">合計価格: {totalPrice}円</p>

        {/* 買うボタン */}
        <Link href={`/purchase?product=${product.name}`}>
          <button className="buy-button">買う</button>
        </Link>
      </div>
    </div>
  );
}
