// app/product/[id]/page.tsx
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Product {
  name: string;
  description: string;
}

const products: Record<string, Product> = {
  tomato: { name: '赤羽トマト（種子）', description: '新鮮な赤羽産のトマトの種子です。' },
  soil: { name: 'INIA土', description: '農業に最適な高品質な土。' },
  'bug-blocker': { name: 'INIAD-BUG-BLOCKER', description: '害虫から作物を守る防護剤。' },
  up: { name: 'INIAD-UP', description: '植物の成長を促進する肥料。' },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Link href={`/purchase?product=${product.name}`}>
        <button>買う</button>
      </Link>
    </div>
  );
}
