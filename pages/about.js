import Layout from '@/components/Layout';

export default function About() {
	return (
		<Layout title='About Page'>
			<div className='flex flex-col justify-center content-center items-center min-h-full'>
				<div className='text-center'>
					<h1 className='md:text-6xl text-4xl font-quick font-extrabold text-yellow-700'>About</h1>
					<p className='text-justify text-gray-700 font-quick font-semibold'>This is an app to recite our Family Holy Song.</p>
					<p className='font-quick text-gray-500 font-bold'>Version: 0.1.0</p>
				</div>
			</div>
		</Layout>
	);
}
