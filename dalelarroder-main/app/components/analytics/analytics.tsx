'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LogRocket from 'app/components/analytics/log-rocket';
import Script from 'next/script';
import { Fragment } from 'react';

const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? '';
const umamiWebsiteUrl = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_URL?.replace(
	/\/$/,
	'',
);

export default function Analytics() {
	return (
		<Fragment>
			{umamiWebsiteId && umamiWebsiteUrl && (
				<Script
					defer
					src={`${umamiWebsiteUrl}/script.js`}
					data-website-id={umamiWebsiteId}
				/>
			)}
			<LogRocket />
			{process.env.NEXT_PUBLIC_VERCEL_ENV && (
				<>
					<VercelAnalytics />
					<SpeedInsights />
				</>
			)}
		</Fragment>
	);
}
