/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 必要に応じてカスタムカラーを追加
      },
      fontFamily: {
        // 必要に応じてカスタムフォントを追加
        sans: ['Noto Sans JP', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

