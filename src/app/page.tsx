"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header'; // ヘッダーコンポーネントをインポート

interface Product {
  id: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 'tomato', name: '赤羽トマト（種子）', image: '/images/tomato.jpg' },
  { id: 'soil', name: 'INIA土', image: '/images/soil.jpg' },
  { id: 'bug-blocker', name: 'INIAD-BUG-BLOCKER', image: '/images/bug-blocker.jpg' },
  { id: 'up', name: 'INIAD-UP', image: '/images/up.jpg' },
];

export default function Home() {
  return (
    <div>
      {/* ヘッダーを追加 */}
      <Header />

      <h1 className="text-4xl font-bold text-center my-6">製品一覧</h1>

      <ul className="flex flex-wrap justify-center gap-6">
        {products.map(product => (
          <li key={product.id} className="border p-4 w-72 text-center">
            <Link href={`/product/${product.id}`}>
              <a>
                {/* 画像を縦のサイズに合わせて表示 */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover h-48 w-full"
                />
                {/* 製品名を太字にして少し大きく */}
                <h2 className="font-bold text-lg mt-2">{product.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
