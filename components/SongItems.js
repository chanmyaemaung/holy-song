import Link from 'next/link';
import Image from 'next/image';

export default function SongItems({ song }) {
	const { title, song_number: number, image, slug } = song;
	const imageUrl = song.image.formats.thumbnail.url;
	return (
		<div className='flex flex-col p-1 justify-center items-center'>
			<div className='dark:bg-gray-800 shadow-md min-h-full min-w-full rounded-md group'>
				<h1 className='text-xl text-center text-yellow-700 hover:font-bold dark:text-yellow-400 font-quick font-semibold py-2'>
					{number}. {title}
				</h1>
				<Image
					className='max-w-full rounded-sm transform transition ease-in-out hover:scale-125'
					src={image ? imageUrl : '/images/default.jpg'}
					width={600}
					height={400}
				/>
				<div className='justify-center items-center text-center mb-0'>
					<Link href={`/songs/${slug}`}>
						<p className='transform transition active:scale-95 font-quick font-medium hover:font-semibold hover:text-yellow-900 dark:hover:text-yellow-400 cursor-pointer m-1 p-2 rounded-sm bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-gray-900 hover:bg-gray-300'>
							Read More
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
