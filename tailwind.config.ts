// tailwind.config.ts
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-green': '#516753', // 家庭菜園に合うカスタムの緑色
        'secondary-green': '#6BAE6E', // 購入ボタンなどで使える緑色
        'primary-red': '#E53E3E', // 減少ボタン用の赤
      },
      spacing: {
        '72': '18rem', // 画像サイズや余白の調整に
        '80': '20rem',
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // カスタムのシャドウ
      },
    },
  },
  plugins: [],
};
