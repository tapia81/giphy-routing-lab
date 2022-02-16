import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_KEY } from '../services/giphyData';

export default function Search() {
	const [ currentSearch, setCurrentSearch ] = useState('');
	const [ showGif, setShowGif ] = useState([]);

	const fetchInput = (input) => {
		setCurrentSearch(input.target.value);
	};

	const fetchSearch = async () => {
		try {
			const response = await axios.get(
				`https://api.giphy.com/v1/gifs/search?q=${currentSearch}&limit=21&api_key=${API_KEY}`
			);
			const res = response.data.data.map((data) => data.images.fixed_width_downsampled.url);
			setShowGif(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(
		() => {
			fetchSearch();
		},
		[ currentSearch ]
	);

	return (
		<div className="container">
			<h1>Search For Gifs</h1>
			<input
				type="text"
				placeholder="Search"
				autoFocus="autofocus"
				onFocus="this.select()"
				onChange={fetchInput}
			/>
			<div className="gif-container">
				{showGif.map((gif) => {
					return <img src={gif} alt="Trending Gif" />;
				})}
			</div>
		</div>
	);
}
