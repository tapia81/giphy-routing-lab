import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Random(props) {
	const [ currentGif, setCurrentGif ] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(props.url);
			const res = response.data.data.images.original.url;
			setCurrentGif(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<h1>Random Gifs</h1>
			<button onClick={fetchData}> Randomize Me</button>
			<div className="gif-container">
				<img src={currentGif} alt="Random Gif" />
			</div>
		</div>
	);
}
