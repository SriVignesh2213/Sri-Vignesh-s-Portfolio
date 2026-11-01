import type { Metadata } from 'next';
import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';

export const metadata: Metadata = {
	title: 'Internships & Achievements',
	description: 'Industry experience and achievements by Sri Vignesh R.',
};

const internships = [
	{
		company: 'ECLearnix Edtech Private Limited',
		role: 'Software Developer Intern',
		dates: '03/2026 – 04/2026',
		location: 'Onsite',
		points: [
			'Developed DocForge, an AI-powered document automation system using Python and FastAPI to process research papers and generate publication-ready documents.',
			'Integrated Sentence Transformers, PyMuPDF, and python-docx for semantic content matching, document parsing, and automated template conversion.',
		],
	},
	{
		company: 'Infosys Springboard',
		role: 'Artificial Intelligence Intern',
		dates: '06/2026 – 09/2026',
		location: 'Remote',
		points: [
			'Evaluated 13 machine learning algorithms for predictive maintenance, achieving 98.90% accuracy and 97.56% ROC-AUC with LightGBM.',
			'Developed a full-stack failure detection system with SHAP explainability, five failure modes, secure REST APIs, React, MongoDB, and Docker.',
		],
	},
	{
		company: 'XenoTech Solutions',
		role: 'Junior Machine Learning Engineer Intern',
		dates: '11/2025 – 12/2025',
		location: 'Remote',
		points: [
			'Developed and optimized 6+ regression and classification models, improving prediction accuracy by 15%.',
			'Improved model performance through hyperparameter tuning and cross-validation, with accuracy gains of up to 18%.',
		],
	},
];

const achievements = [
	'1st Prize — Paper Presentation, BARNSTORMZ’26, Hindustan Institute of Technology',
	'5th Place — Amalgam ’26 ML Hackathon, IIT Madras',
	'1st Place — STEM Innovators Expo 2025, KPRIET',
	'2nd Place — BIT Season 2 Hackathon',
	'2nd Place — Vibecode’26 Hackathon',
	'NPTEL Programming in Java — Elite Gold, 90%',
	'Neural Networks and Deep Learning — Coursera, Andrew Ng',
];

export default function InternshipsPage() {
	return (
		<PageContainer>
			<Header title='Internships & Achievements' />
			<div className='space-y-14'>
				<section aria-labelledby='experience-heading'>
					<div className='mb-6'>
						<p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-500'>
							Experience
						</p>
						<h2 id='experience-heading' className='mt-2 text-3xl font-bold'>
							Internships
						</h2>
					</div>
					<div className='space-y-5'>
						{internships.map((internship) => (
							<article
								key={internship.company}
								className='rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-neutral-950 sm:p-8'
							>
								<div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
									<div>
										<h3 className='text-xl font-semibold'>{internship.role}</h3>
										<p className='mt-1 text-gray-600 dark:text-gray-300'>
											{internship.company} · {internship.location}
										</p>
									</div>
									<p className='shrink-0 text-sm text-gray-500 dark:text-gray-400'>
										{internship.dates}
									</p>
								</div>
								<ul className='mt-5 space-y-3 text-gray-700 dark:text-gray-300'>
									{internship.points.map((point) => (
										<li key={point} className='flex gap-3 leading-7'>
											<span className='mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500' />
											{point}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				<section aria-labelledby='achievements-heading'>
					<div className='mb-6'>
						<p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-500'>
							Recognition
						</p>
						<h2 id='achievements-heading' className='mt-2 text-3xl font-bold'>
							Achievements & Certifications
						</h2>
					</div>
					<ul className='grid gap-3 sm:grid-cols-2'>
						{achievements.map((achievement) => (
							<li
								key={achievement}
								className='rounded-lg border border-gray-200 bg-white p-5 leading-7 dark:border-gray-800 dark:bg-neutral-950'
							>
								{achievement}
							</li>
						))}
					</ul>
				</section>
			</div>
		</PageContainer>
	);
}
