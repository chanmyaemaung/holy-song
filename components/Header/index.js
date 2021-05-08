import Image from 'next/image';
import { SearchCircleIcon } from '@heroicons/react/outline';

export default function Header() {
	return (
		<div>
			<header className='flex items-center justify-between px-4 py-3 bg-gray-100 border-b dark:bg-gray-800'>
				<Image
					className='rounded-full'
					src='/images/logo.png'
					width={50}
					height={50}
				/>
				<div className=''>
					<input className='' type='text' placeholder='search here' />
				</div>
				<div>
					<SearchCircleIcon className='w-7 h-7 dark:text-white' />
				</div>
			</header>
		</div>
	);
}
