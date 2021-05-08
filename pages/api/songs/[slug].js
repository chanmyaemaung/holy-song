const { songs } = require('./data.json');

export default (req, res) => {
	const song = songs.filter((song) => song.slug === req.query.slug);

	if (req.method === 'GET') {
		res.status(200).json(song);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	}
};
