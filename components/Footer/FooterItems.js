import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FooterItems({ Icon, path }) {
	const router = useRouter();

	// get the parameter of the url
	const pathName = router.pathname;

	return (
		<Link href={path}>
			<div className='flex items-center justify-center w-1/4 py-4 hover:bg-gray-200 cursor-pointer'>
				<Icon
					className={`p-px w-7 h-7 ${
						pathName === path
							? 'text-yellow-700 dark:text-yellow-500'
							: 'text-gray-700'
					}`}
				/>
			</div>
		</Link>
	);
}
