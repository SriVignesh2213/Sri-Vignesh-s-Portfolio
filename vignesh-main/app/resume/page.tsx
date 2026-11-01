import type { Metadata } from 'next';
import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';
import { sitePath } from '../site-path';

export const metadata: Metadata = {
	title: 'Resume',
	description: 'View or download Sri Vignesh R’s resume.',
};

export default function ResumePage() {
	return (
		<PageContainer>
			<Header title='Resume' />
			<div className='mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
				<div>
					<p className='text-lg leading-7 text-gray-600 dark:text-gray-300'>
						View the resume below or open it in a new tab.
					</p>
				</div>
				<div className='flex flex-wrap gap-3'>
					<a
						href={sitePath('/resume.pdf')}
						target='_blank'
						rel='noreferrer'
						className='rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:hover:text-primary-300'
					>
						Open resume
					</a>
					<a
						href={sitePath('/resume.pdf')}
						download='Sri-Vignesh-R-Resume.pdf'
						className='rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600'
					>
						Download PDF
					</a>
				</div>
			</div>
			<iframe
				title='Sri Vignesh R resume PDF'
				src={`${sitePath('/resume.pdf')}#view=FitH`}
				className='h-[75vh] min-h-[600px] w-full rounded-xl border border-gray-200 bg-white dark:border-gray-800'
			/>
		</PageContainer>
	);
}
