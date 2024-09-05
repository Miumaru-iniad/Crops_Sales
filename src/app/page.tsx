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

      {/* 製品一覧の見出しを大きく表示 */}
      <h1 className="text-5xl font-bold text-center my-6">製品一覧</h1>

      {/* 商品を横に並べる */}
      <ul className="flex flex-wrap justify-center gap-8">
        {products.map(product => (
          <li key={product.id} className="border p-4 w-72 text-center">
            <Link href={`/product/${product.id}`}>
              <a>
                {/* 画像の高さを統一 */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover h-48 w-full"
                />
                {/* 製品名を太字にして大きく表示 */}
                <h2 className="font-bold text-xl mt-2">{product.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

