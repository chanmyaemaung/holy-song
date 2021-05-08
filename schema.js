<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
	<div className='flex flex-grow justify-evenly max-w-2xl'>
		<HeaderItem path='/' title='HOME' Icon={HomeIcon} />
		<HeaderItem path='/songs' title='SONGS' Icon={MusicNoteIcon} />
		<HeaderItem path='/add' title='ADD' Icon={DocumentAddIcon} />
		<HeaderItem path='/about' title='ABOUT' Icon={InformationCircleIcon} />
	</div>
	<Image
		className='object-contain'
		src='/images/logo.png'
		width={80}
		height={80}
	/>
</header>;

<footer className='flex flex-col items-center'>
	<p className='hover:text-yellow-500'>
		Copyright &copy; HolySong {currentYear}.
	</p>
	<Link href='/about'>
		<a className='text-blue-400'>About This Project</a>
	</Link>
</footer>;

	<Image
		layout='responsive'
		src={song.image ? imageUrl : '/images/default.jpg'}
		width={1080}
		height={720}
	/>;
