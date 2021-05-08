import Link from 'next/link';
import Image from 'next/image';

export default function ShowAllSongs({ song }) {
	const { title, song_number: number, image, slug } = song;
	const imageUrl = song.image.formats.thumbnail.url;

	return (
		<div className='flex flex-col p-2 justify-center items-center m-2 md:m-0'>
			<div className='dark:bg-gray-800 shadow-md min-h-full min-w-full rounded-md group'>
				<h1 className='text-xl text-center text-yellow-700 hover:font-bold dark:text-yellow-400 font-quick font-semibold py-3'>
					{number}. {title}
				</h1>
				<Image
					className='max-w-full rounded-sm transform transition ease-in-out hover:scale-125'
					src={image ? imageUrl : '/images/default.jpg'}
					width={600}
					height={400}
				/>
				<div className='justify-center items-center text-center'>
					<Link href={`/songs/${slug}`}>
						<p className='font-quick font-medium hover:font-semibold hover:text-yellow-900 dark:hover:text-yellow-400 cursor-pointer m-2 p-2 rounded-sm bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-gray-900 hover:bg-gray-300'>
							Read More
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
