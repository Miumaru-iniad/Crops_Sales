"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';  // ヘッダーコンポーネントをインポート

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
      {/* ヘッダーをページの最上部に追加 */}
      <Header />

      <h1>製品一覧</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border p-4">
            <Link href={`/product/${product.id}`}>
              <a>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <h2>{product.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}