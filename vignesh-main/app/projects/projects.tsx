'use client';

import { motion, useReducedMotion } from 'motion/react';
import { projects } from './constants';
import ProjectItem from './project-item';

export default function Projects() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<div className='grid gap-5 md:grid-cols-2'>
			{projects.map((project, index) => (
				<motion.div
					key={project.title}
					initial={{
						scale: prefersReducedMotion ? 1 : 0.8,
						opacity: 0,
						filter: prefersReducedMotion ? 'blur(0px)' : 'blur(2px)',
					}}
					animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
					transition={{
						duration: prefersReducedMotion ? 0.2 : 0.6,
						delay: prefersReducedMotion ? 0 : index / 10,
					}}
				>
					<ProjectItem project={project} />
				</motion.div>
			))}
		</div>
	);
}
