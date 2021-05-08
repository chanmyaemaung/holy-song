import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import MarkdownRenderer from 'react-markdown-renderer';
import Link from 'next/link';

export default function SongPage({ song }) {
	const { title, words, music_author: author, song_body: body } = song;
	return (
		<Layout title='Single Page'>
			<div className='flex flex-col justify-center items-center min-h-full text-center'>
				<div className='m-4 border rounded-lg shadow-md'>
					<div className='p-2'>
						<h3 className='text-3xl'>{title}</h3>
						<p className='font-quick'>
							Words:{' '}
							<span className='text-yellow-700 font-semibold'>{words} - </span>
							Author:{' '}
							<span className='text-yellow-700 font-semibold'>{author}</span>
						</p>
					</div>
					<div className='bg-gradient-to-r from-gray-200 via-gray-400 to-red-yellow p-8'>
						<MarkdownRenderer markdown={body} className='text-justify' />
					</div>
				</div>
			</div>
		</Layout>
	);
}

// Get the path
export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/api/songs`);
	const songs = await res.json();

	const paths = songs.map((song) => ({
		params: { slug: song.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

// Get the Slug
export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/api/songs/${slug}`);
	const songs = await res.json();

	return {
		props: {
			song: songs[0],
		},
		revalidate: 1,
	};
}
