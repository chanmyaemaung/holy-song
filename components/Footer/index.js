import { useRouter } from 'next/router';
import {
	HomeIcon,
	MusicNoteIcon,
	InformationCircleIcon,
	BookOpenIcon,
} from '@heroicons/react/outline';
import {
	HomeIcon as HomeSolid,
	MusicNoteIcon as MusicSolid,
	InformationCircleIcon as InfoSolid,
	BookOpenIcon as BookSolid,
} from '@heroicons/react/solid';
import FooterItems from './FooterItems';

export default function Footer() {
	const router = useRouter();
	const pathName = router.pathname;

	// Define custom route
	const home = '/';
	const songs = '/songs';
	const pledge = '/pledge';
	const about = '/about';

	return (
		<footer className='flex border-t border-gray-300 bg-gray-200 dark:bg-gray-800'>
			<FooterItems
				path={home}
				Icon={pathName === home ? HomeSolid : HomeIcon}
			/>
			<FooterItems
				path={songs}
				Icon={pathName === songs ? MusicSolid : MusicNoteIcon}
			/>
			<FooterItems
				path={pledge}
				Icon={pathName === pledge ? BookSolid : BookOpenIcon}
			/>
			<FooterItems
				path={about}
				Icon={pathName === about ? InfoSolid : InformationCircleIcon}
			/>
		</footer>
	);
}
