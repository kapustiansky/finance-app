import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItemLogic from '../favorites-item-logic';
import './favorites-list.css';

function FavoritesList() {
	const favorites = useSelector((state) => state.favorites);

	return (
		<section className='favorites-container'>
			<div className='favorites-wrapper'>
				{favorites.map((data, index) => {
					return (
						<FavoritesItemLogic
							key={`${data.ticker}${index}`}
							favoritesItem={data}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default FavoritesList;
