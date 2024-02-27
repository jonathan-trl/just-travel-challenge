import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'circular-std': 'var(--font-circular-std)',
        'inter': 'var(--font-inter)',
      },
      fontSize: {
        'text-display': ['55px', '55px'],
        'heading-1': ['40px', '45px'],
        'heading-2': ['24px', '30px'],
        'heading-3': ['22px', '30px'],
        lg: ['20px', '26px'],
        md: ['16px', '22px'],
        normal: ['14px', '18px'],
        sm: ['12px', '16px'],
      },
      fontWeight: {
        normal: '450',
        medium: '500',
        bold: '700',
      },
      colors: {
        body: '#F6F6F6',
        'brand-blue': '#4070F4',
        'brand-green': '#2BD67B',
        'brand-black': '#0A2156',
        'gray-10': '#E7E9ED',
        'gray-20': '#CED2DB',
        'gray-30': '#B6BCC9',
        'gray-40': '#9EA5B8',
        'gray-50': '#858FA6',
        'gray-60': '#6D7994',
        'gray-70': '#556282',
        'gray-80': '#3C4C70',
        'gray-90': '#24365E',
        'gray-100': '#0B1F4D',
        'support-01': '#4070F4',
        'support-02': '#0BB07B',
        'support-03': '#FFAD0D',
        'support-04': '#F03D3D',
        'support-05': '#3C4C70',
        'support-06': '#3570BF',
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(11, 31, 77, 0.08)',
        md: '0px 4px 8px 0px rgba(11, 31, 77, 0.1)',
        lg: '0px 8px 16px 0px rgba(11, 31, 77, 0.12)',
        xl: '0px 12px 24px 0px rgba(11, 31, 77, 0.14)',
        xxl: '0px 16px 32px 0px rgba(11, 31, 77, 0.16)',
      },
      borderWidth: {
        '1.8': '1.8px',
        '0.8': '0.8px',
      },
      spacing: {
        'spacing-xxs': '10px',
        'spacing-xs': '20px',
        'spacing-sm': '30px',
        'spacing-md': '60px',
        'spacing-lg': '80px',
        'spacing-xl': '120px',
        'spacing-2xl': '200px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
export default config
