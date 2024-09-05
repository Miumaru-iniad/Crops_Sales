// app/page.js
import Link from 'next/link';

const products = [
  { id: 'tomato', name: '赤羽トマト（種子）' },
  { id: 'soil', name: 'INIA土' },
  { id: 'bug-blocker', name: 'INIAD-BUG-BLOCKER' },
  { id: 'up', name: 'INIAD-UP' },
];

export default function Home() {
  return (
    <div>
      <h1>製品一覧</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

