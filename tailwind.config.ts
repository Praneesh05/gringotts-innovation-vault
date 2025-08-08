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
					'0%, 100%': { 
						opacity: '1',
						filter: 'drop-shadow(0 0 15px hsl(30 100% 70% / 0.6))'
					},
					'25%': { 
						opacity: '0.9',
						filter: 'drop-shadow(0 0 20px hsl(30 100% 70% / 0.8))'
					},
					'50%': { 
						opacity: '0.95',
						filter: 'drop-shadow(0 0 10px hsl(30 100% 70% / 0.4))'
					},
					'75%': { 
						opacity: '0.85',
						filter: 'drop-shadow(0 0 25px hsl(30 100% 70% / 0.9))'
					}
				},
				'chandelier-sway': {
					'0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
					'25%': { transform: 'rotate(0.5deg) translateY(-2px)' },
					'50%': { transform: 'rotate(0deg) translateY(-1px)' },
					'75%': { transform: 'rotate(-0.5deg) translateY(-2px)' }
				},
				'chain-swing': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(1deg)' }
				},
				'candle-wax-drip': {
					'0%': { height: '0px', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { height: '20px', opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'magical-float': 'magical-float 3s ease-in-out infinite',
				'sparkle-sweep': 'sparkle-sweep 2s infinite',
				'book-open': 'book-open 0.8s ease-out forwards',
				'candleflicker': 'candleflicker 2s ease-in-out infinite',
				'chandelier-sway': 'chandelier-sway 4s ease-in-out infinite',
				'chain-swing': 'chain-swing 3s ease-in-out infinite',
				'candle-wax-drip': 'candle-wax-drip 4s ease-out infinite',
				'particle-float': 'particle-float 3s ease-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
