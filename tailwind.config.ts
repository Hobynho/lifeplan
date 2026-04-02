import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Verde Escuro Premium (Confiança & Autoridade)
        primary: {
          50: '#f0f4f1',
          100: '#dce5e0',
          200: '#b8cfc2',
          300: '#94b9a3',
          400: '#70a384',
          500: '#2d5a42', // Primary Core
          600: '#25493a',
          700: '#1d3832',
          800: '#15272a',
          900: '#0d1622',
        },
        
        // Secondary: Azul Suave (Dados & Features)
        secondary: {
          50: '#f0f3fb',
          100: '#dce3f5',
          200: '#b8c7ec',
          300: '#94abe3',
          400: '#708fda',
          500: '#4c73d1',
          600: '#3d5ca8',
          700: '#2e457f',
          800: '#1f2e56',
          900: '#10172d',
        },

        // Accent: Rosa Suave (Destaque delicado)
        accent: {
          50: '#fdf3f8',
          100: '#fae5f0',
          200: '#f5cce2',
          300: '#f0b3d4',
          400: '#eb9ac6',
          500: '#e681b8',
          600: '#d45a9a',
          700: '#c2337c',
          800: '#b00c5e',
          900: '#8a0a47',
        },

        // Neutral: Tom Bege/Off-white e Cinzas
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a3a09e',
          500: '#78746e',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },

        // Success: Verde Claro
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },

        // Warning: Âmbar
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },

        // Error: Vermelho
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },

        // Info: Ciano
        info: {
          50: '#ecf9ff',
          100: '#d9f2ff',
          200: '#b3e5fd',
          300: '#81d8f7',
          400: '#4fbdea',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d6e',
        },

        // Background
        bg: {
          light: '#fafaf9',
          elevated: '#ffffff',
          muted: '#f5f5f4',
        },
      },

      fontSize: {
        // Display
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        
        // Heading
        'h1': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        
        // Labels & Captions
        'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },

      spacing: {
        // Tailwind default + custom
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },

      borderRadius: {
        'none': '0',
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },

      boxShadow: {
        // Subtle depth system
        'none': 'none',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },

      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },

      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
