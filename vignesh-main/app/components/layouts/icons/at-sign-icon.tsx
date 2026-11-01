'use client';

import classNames from 'classnames';
import type { Variants } from 'motion/react';
import { motion } from 'motion/react';

interface AtSignIconProps {
	href: string;
	size?: number;
	className?: string;
	'aria-label'?: string;
	'data-skip-splash-cursor'?: boolean;
}

const circleVariants: Variants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		pathOffset: 0,
		transition: {
			duration: 0.4,
			opacity: { duration: 0.1 },
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.3,
			opacity: { duration: 0.1 },
		},
	},
};

const pathVariants: Variants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		transition: {
			delay: 0.3,
			duration: 0.3,
			opacity: { duration: 0.1, delay: 0.3 },
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		transition: {
			delay: 0.3,
			duration: 0.3,
			opacity: { duration: 0.1, delay: 0.3 },
		},
	},
};

export function AtSignIcon({
	href,
	className,
	size = 28,
	...props
}: AtSignIconProps) {
	return (
		<motion.a
			href={href}
			className={classNames(
				'flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent',
				className,
			)}
			initial='normal'
			whileHover='animate'
			variants={{ normal: {}, animate: {} }}
			{...props}
		>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-label='At sign icon'
			>
				<title>At sign icon</title>
				<motion.circle variants={circleVariants} cx='12' cy='12' r='4' />
				<motion.path
					variants={pathVariants}
					d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'
				/>
			</motion.svg>
		</motion.a>
	);
}
