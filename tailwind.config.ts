
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
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				blkr: {
					gold: '#D4AF37',
					goldLight: '#F8EFD4',
					goldDark: '#A08623',
					black: '#0A0A0A',
					blackLight: '#1A1A1A',
					offWhite: '#F5F5F5',
				},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'gold-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-40rem 0',
					},
					'100%': {
						backgroundPosition: '40rem 0',
					},
				},
				'rotate-center': {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'gold-pulse': 'gold-pulse 2s infinite',
				'float': 'float 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'rotate-center': 'rotate-center 8s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'ripple': 'ripple 1s cubic-bezier(0, 0.2, 0.8, 1) forwards',
				'gradient-shift': 'gradient-shift 4s ease infinite',
			},
			backgroundImage: {
				'gold-gradient': 'linear-gradient(to right, #D4AF37, #F8EFD4, #D4AF37)',
				'dark-gradient': 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
				'card-gradient': 'linear-gradient(to bottom, rgba(26,26,26,0.8), rgba(10,10,10,0.8))',
				'hero-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.05"%3E%3Cpath d="M36 34h-2v-2h2v2zm0-8h-2v2h2v-2zm-8 0h-2v2h2v-2zm8 4h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm8-12h-2v2h2V6zm-4 0h-2v2h2V6zm-4 0h-2v2h2V6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
			},
			boxShadow: {
				'gold-sm': '0 1px 2px 0 rgba(212, 175, 55, 0.05)',
				'gold': '0 1px 3px 0 rgba(212, 175, 55, 0.1), 0 1px 2px -1px rgba(212, 175, 55, 0.1)',
				'gold-md': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -2px rgba(212, 175, 55, 0.1)',
				'gold-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -4px rgba(212, 175, 55, 0.1)',
				'gold-xl': '0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 8px 10px -6px rgba(212, 175, 55, 0.1)',
				'gold-2xl': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
