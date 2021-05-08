import Link from 'next/link';
import Layout from '@/components/Layout';
import SongItems from '@/components/SongItems';
import { API_URL } from '@/config/index';

export default function Home({ songs }) {
	return (
		<Layout title='Home Page'>
			{/* If there is no any songs */}
			{songs.length === 0 && <h3>No songs to show</h3>}

			{/* Show  Specific Song */}
			<div className='grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-4 gap-1 md:p-10 sm:p-5'>
				{songs.map((song) => (
					<SongItems key={song.id} song={song} />
				))}
			</div>

			{/* Show All Song */}
			{songs.length > 0 && (
				<Link href='/songs'>
					<div className='flex justify-center items-center'>
						<p className='hover:opacity-95 transform transition active:scale-95 hover:text-yellow-900 text-center bg-gray-500 font-quick hover:font-extrabold uppercase px-10 rounded-xl cursor-pointer'>
							View All
						</p>
					</div>
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/songs`);
	const songs = await res.json();

	return {
		props: { songs: songs.slice(0, 4) },
		revalidate: 1,
	};
}
