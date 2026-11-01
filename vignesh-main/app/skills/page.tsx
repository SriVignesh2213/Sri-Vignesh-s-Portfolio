import type { Metadata } from 'next';
import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';

export const metadata: Metadata = {
	title: 'Skills',
	description:
		'Technical skills of Sri Vignesh R across AI, data science, and development.',
};

const skillGroups = [
	{
		title: 'Programming Languages',
		skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL'],
	},
	{
		title: 'AI & Machine Learning',
		skills: [
			'Machine Learning',
			'Deep Learning',
			'NLP',
			'Computer Vision',
			'Model Fine-Tuning',
			'Feature Engineering',
		],
	},
	{
		title: 'Model Development',
		skills: [
			'Cross-Validation',
			'Model Validation',
			'Hyperparameter Tuning',
			'Model Evaluation',
			'Ensemble Learning',
			'SHAP',
		],
	},
	{
		title: 'Frameworks & Libraries',
		skills: [
			'Scikit-learn',
			'PyTorch',
			'LightGBM',
			'XGBoost',
			'Sentence Transformers',
			'RDKit',
		],
	},
	{
		title: 'Full-Stack Development',
		skills: ['React.js', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
	},
	{
		title: 'Databases & Tools',
		skills: [
			'PostgreSQL',
			'MongoDB',
			'MySQL',
			'Git',
			'GitHub',
			'Docker',
			'VS Code',
			'PyCharm',
		],
	},
];

export default function SkillsPage() {
	return (
		<PageContainer>
			<Header title='Skills' />
			<div className='mb-8 max-w-2xl'>
				<p className='text-lg leading-7 text-gray-600 dark:text-gray-300'>
					A practical toolkit for building AI systems, analyzing data, and
					shipping full-stack applications.
				</p>
			</div>
			<div className='grid gap-5 md:grid-cols-2'>
				{skillGroups.map((group, index) => (
					<section
						key={group.title}
						className='rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-neutral-950 sm:p-8'
					>
						<p className='mb-4 text-sm font-semibold text-primary-500'>
							{String(index + 1).padStart(2, '0')}
						</p>
						<h2 className='mb-5 text-xl font-semibold'>{group.title}</h2>
						<ul className='flex flex-wrap gap-2'>
							{group.skills.map((skill) => (
								<li
									key={skill}
									className='rounded-full bg-primary-500/10 px-3 py-1.5 text-sm text-primary-800 dark:text-primary-200'
								>
									{skill}
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</PageContainer>
	);
}
