'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { sitePath } from '../../../site-path';

export default function CodolioIcon() {
	return (
		<motion.span
			className='flex h-9 w-9 items-center justify-center bg-transparent'
			initial={{ opacity: 0, scale: 0.85 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.12, rotate: -5 }}
			whileTap={{ scale: 0.94 }}
			transition={{ type: 'spring', stiffness: 420, damping: 18 }}
		>
			<Image
				src={sitePath('/static/images/codelio-mark-light.png')}
				alt='Codolio'
				width={28}
				height={28}
				unoptimized
				className='h-full w-full object-contain mix-blend-multiply dark:hidden'
			/>
			<Image
				src={sitePath('/static/images/codelio-mark-dark.png')}
				alt=''
				aria-hidden='true'
				width={28}
				height={28}
				unoptimized
				className='hidden h-full w-full object-contain dark:block'
			/>
		</motion.span>
	);
}
