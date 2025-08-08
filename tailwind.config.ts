import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Magical color extensions
				magical: {
					gold: 'hsl(var(--magical-gold))',
					'gold-glow': 'hsl(var(--magical-gold-glow))',
					navy: 'hsl(var(--magical-navy))',
					'navy-deep': 'hsl(var(--magical-navy-deep))'
				},
				parchment: {
					DEFAULT: 'hsl(var(--parchment))',
					aged: 'hsl(var(--parchment-aged))'
				}
			},
			fontFamily: {
				magical: ['Cinzel', 'serif'],
				serif: ['Crimson Text', 'serif'],
			},
			backgroundImage: {
				'gradient-magical': 'var(--gradient-magical)',
				'gradient-mystical': 'var(--gradient-mystical)',
				'gradient-parchment': 'var(--gradient-parchment)',
			},
			boxShadow: {
				'magical': 'var(--shadow-magical)',
				'mystical': 'var(--shadow-mystical)',
			},
			dropShadow: {
				'glow': 'var(--glow-golden)',
			},
			transitionTimingFunction: {
				'magical': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'enchanted': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'magical-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'sparkle-sweep': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				'book-open': {
					'0%': { transform: 'rotateY(0deg) scale(1)' },
					'50%': { transform: 'rotateY(-10deg) scale(1.05)' },
					'100%': { transform: 'rotateY(-15deg) scale(1)' }
				},
				'candleflicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
					'100%': { transform: 'translateY(-100px) scale(0)', opacity: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { filter: 'drop-shadow(0 0 10px hsl(var(--magical-gold) / 0.5))' },
					'50%': { filter: 'drop-shadow(0 0 30px hsl(var(--magical-gold) / 0.8))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'magical-float': 'magical-float 3s ease-in-out infinite',
				'sparkle-sweep': 'sparkle-sweep 2s infinite',
				'book-open': 'book-open 0.8s ease-out forwards',
				'candleflicker': 'candleflicker 2s ease-in-out infinite',
				'particle-float': 'particle-float 3s ease-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
