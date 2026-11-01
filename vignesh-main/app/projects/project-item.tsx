import type { Project } from './types';

interface ProjectProps {
	project: Project;
}

export default function ProjectItem({ project }: ProjectProps) {
	return (
		<a
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			className='group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/60 hover:shadow-lg dark:border-gray-800 dark:bg-neutral-950 sm:p-8'
		>
			<div className='mb-4 flex items-start justify-between gap-3'>
				<h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
					{project.title}
				</h2>
				<span
					aria-hidden='true'
					className='text-xl text-primary-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
				>
					↗
				</span>
			</div>
			<p className='mb-6 flex-1 leading-7 text-gray-600 dark:text-gray-300'>
				{project.description}
			</p>
			<ul
				className='flex flex-wrap gap-2'
				aria-label={`${project.title} technologies`}
			>
				{project.techStack.map((technology) => (
					<li
						key={technology}
						className='rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300'
					>
						{technology}
					</li>
				))}
			</ul>
		</a>
	);
}
