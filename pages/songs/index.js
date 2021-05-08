import Layout from '@/components/Layout';
import ShowAllSongs from '@/components/ShowAllSongs';
import { API_URL } from '@/config/index';

export default function SongPage({ songs }) {
	return (
		<Layout title='Home Page'>
			{songs.length === 0 && <h3>No songs to show</h3>}

			<div className='grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-1 md:p-10 sm:p-5'>
				{songs.map((song) => (
					<ShowAllSongs key={song.id} song={song} />
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const url = `${API_URL}/api/songs`;
	const res = await fetch(url);
	const songs = await res.json();

	return {
		props: { songs },
		revalidate: 1,
	};
}
