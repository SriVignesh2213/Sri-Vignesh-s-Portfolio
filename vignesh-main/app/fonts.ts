import { Merriweather } from 'next/font/google';

export const merryWeather = Merriweather({
	weight: ['300', '400', '700', '900'],
	variable: '--font-merriweather',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});
