// app/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ position: 'relative', height: '200px' }}>
      {/* 背景画像としてhead.jpgを表示 */}
      <Image 
        src="/images/head.jpg" 
        alt="Header Image" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority 
      />
      {/* ホームページへのリンク */}
      <div style={{
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}>
        <Link href="/">
          <a>ホームページに戻る</a>
        </Link>
      </div>
    </header>
  );
}
