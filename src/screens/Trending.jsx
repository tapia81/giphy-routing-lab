import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Trending(props) {
	const [ currentTrendingGif, setCurrentTrendingGif ] = useState([]);

	const fetchTrendingData = async () => {
		try {
			const response = await axios.get(props.url);
			const res = response.data.data.map((data) => data.images.original.url);
			setCurrentTrendingGif(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTrendingData();
	}, []);

	return (
		<div className="container">
			<h1>Trending Gifs</h1>
			<div className="gif-container">
				{currentTrendingGif.map((gif) => {
					return <img src={gif} alt="Trending Gif" />;
				})}
			</div>
		</div>
	);
}
