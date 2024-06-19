/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryCyan: 'hsl(180, 66%, 49%)',
				primaryDarkViolet: 'hsl(257, 27%, 26%)',
				secondaryRed: 'hsl(0, 87%, 67%)',
				neutralGray: 'hsl(0, 0%, 75%)',
				neutralGrayishViolet: 'hsl(257, 7%, 63%)',
				neutralVeryDarkBlue: 'hsl(255, 11%, 22%)',
				neutralVeryDarkViolet: 'hsl(260, 8%, 14%)',
			},
			backgroundColor: {
				primaryCyan: 'hsl(180, 66%, 49%)',
			},
			fontFamily: {
				'poppins': "'Poppins', sans-serif"
			},
			fontWeight: {
				'bold2': 'bold',
			},
			gridTemplateColumns: {
				'1fr2fr': '1fr, 2fr'
			},
			backgroundImage: {
				'short-mobile': "url('../../images/bg-shorten-mobile.svg')",
				'short-desktop': "url('../../images/bg-shorten-desktop.svg')",
				'boost-mobile': "url('../../images/bg-boost-mobile.svg')",
				'boost-desktop': "url('../../images/bg-boost-desktop.svg')",
			}
		},
	},
	plugins: [],
}
