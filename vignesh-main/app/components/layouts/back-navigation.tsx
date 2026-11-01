'use client';

import { useRouter } from 'next/navigation';
import { SquareArrowLeftIcon } from './icons/square-arrow-left';

export default function BackNavigation() {
	const router = useRouter();

	return (
		<button
			type='button'
			onClick={() => router.back()}
			className='flex w-full cursor-pointer text-primary-500 mb-12'
		>
			<div className='flex w-full items-center'>
				<SquareArrowLeftIcon size={20} className='h-9 w-9' />
				<span className='font-bold'>Back</span>
				<div className='mx-1 w-full border-b border-primary-500' />
			</div>
		</button>
	);
}
