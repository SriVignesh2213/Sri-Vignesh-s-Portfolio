import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import CodolioIcon from '../layouts/icons/codolio-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import SplashCursor from '../splash-cursor';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<div
					className={classNames('relative min-h-svh', merryWeather.className)}
				>
					<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
						<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
							Welcome to my{' '}
							<span className='font-bold'>personal portfolio — </span> or, as I
							like to call it, my{' '}
							<span className='italic border-b border-b-primary-500'>
								playground
							</span>{' '}
							on the web.
						</h1>
						<section className='relative z-10'>
							<p className='text-lg font-semibold'>Sri Vignesh R</p>
							<p className='text-base text-justify'>
								AI &amp; Data Science undergraduate with industry internship
								experience in AI/ML and full-stack development. Skilled in
								predictive modeling, NLP, explainable AI, and building scalable
								web applications, with achievements in technical hackathons and
								research presentations.
							</p>
						</section>
						<section className='relative z-10 flex space-x-4 items-center text-sm'>
							<div>
								<p>More about me: </p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/sri-vignesh-r-a55bab339'
										target='_blank'
										rel='noreferrer'
										aria-label='LinkedIn profile'
										data-skip-splash-cursor
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com/SriVignesh2213'
										target='_blank'
										rel='noreferrer'
										aria-label='GitHub profile'
										data-skip-splash-cursor
									>
										<GithubIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://codolio.com/profile/FletcherGod'
										target='_blank'
										rel='noreferrer'
										aria-label='Codolio profile'
										data-skip-splash-cursor
									>
										<CodolioIcon />
									</Link>
									<AtSignIcon
										href='mailto:vigneshsri058@gmail.com'
										aria-label='Email Sri Vignesh R'
										className='h-9 w-9'
										data-skip-splash-cursor
									/>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300' />
							<div
								className='flex flex-wrap space-x-3 space-y-1'
								data-skip-splash-cursor
							>
								<Link href='/projects'>/projects</Link>
								<Link href='/internships'>/internships</Link>
								<Link href='/skills'>/skills</Link>
								<Link href='/resume'>/resume</Link>
							</div>
						</section>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
