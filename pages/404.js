import Link from 'next/link';
import Layout from '@/components/Layout';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

export default function NotFoundPage() {
	return (
		<Layout title='404 Not Found!'>
			<div className='flex flex-col items-center justify-center'>
				<ExclamationCircleIcon className='h-8' />
				<h1 className='text-7xl'>404</h1>
				<h4 className='text-3xl'>Sorry, there is nothing here.</h4>
				<Link className='text-2xl' href='/'>
					Go Back
				</Link>
			</div>
		</Layout>
	);
}
