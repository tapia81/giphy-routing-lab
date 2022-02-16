import './App.css';
import axios from 'axios';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Random from './screens/Random';
import Trending from './screens/Trending';
import Search from './screens/Search';
import { API_KEY } from './services/giphyData';
import { RANDOM_KEY } from './services/giphyData';
import { TRENDING_KEY } from './services/giphyData';

function App() {
	return (
		<div className="App">
			<div className="links">
				<nav>
					<NavLink className="link" to={'/'}>
						Home
					</NavLink>
					<NavLink className="link" to={'/Random'}>
						Random Gifs
					</NavLink>
					<NavLink className="link" to={'/Trending'}>
						Trending{' '}
					</NavLink>
					<NavLink className="link" to={'/Search'}>
						Search
					</NavLink>
				</nav>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/Random"
					element={<Random url={`https://api.giphy.com/v1/gifs/${RANDOM_KEY}?&api_key=${API_KEY}`} />}
				/>
				<Route
					path="/Trending"
					element={
						<Trending url={`https://api.giphy.com/v1/gifs/${TRENDING_KEY}?limit=21&api_key=${API_KEY}`} />
					}
				/>
				<Route path="/Search" element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
