import Analytics from 'app/components/analytics/analytics';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { merryWeather } from './fonts';
import { sitePath } from './site-path';
import './tailwind.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Sri Vignesh R',
		default: 'Sri Vignesh R',
	},
	description:
		'AI & Data Science undergraduate with industry internship experience in AI/ML and full-stack development.',
	metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning className={merryWeather.className}>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='76x76'
					href={sitePath('/static/favicons/favicon.ico')}
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href={sitePath('/static/favicons/favicon.ico')}
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href={sitePath('/static/favicons/favicon.ico')}
				/>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#000000' />
			</head>
			<body className='bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					themes={['dark', 'light']}
				>
					<LenisProvider>
						<ThemeSwitch />
						{children}
					</LenisProvider>
					{process.env.NODE_ENV === 'production' && <Analytics />}
				</ThemeProvider>
			</body>
		</html>
	);
}
