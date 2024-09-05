// app/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#516753', padding: '10px' }}>
      {/* ホームページにリンクされた画像 */}
      <Link href="/">
        <a>
          <div style={{ maxHeight: '80px', overflow: 'hidden' }}>
            <Image 
              src="/images/head.jpg" 
              alt="Header Image"
              layout="intrinsic" // アスペクト比を保ちながら表示
              height={80}        // 縦幅のみ制限
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </a>
      </Link>
    </header>
  );
}


