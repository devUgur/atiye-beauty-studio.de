// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F43F5E',
                secondary: '#6366F1',
                brand: {
                    light: '#E0F2FE',
                    DEFAULT: '#0EA5E9',
                    dark: '#0369A1'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
}

export default config