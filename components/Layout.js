import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div className='flex flex-col h-screen'>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='flex-1 overflow-y-scroll'>{children}</main>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Family Holy Song Book',
	description: 'This is for our FFWPU members all around the world.',
	keywords: 'ffwpu, ffwpu-myanmar, holysong, ffwpu song',
};
