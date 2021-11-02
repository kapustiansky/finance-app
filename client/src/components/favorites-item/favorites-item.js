import React from 'react';
import './favorites-item.css';

function FavoritesItem({ favoritesItem, removeFavoritesItem }) {
	return (
		<div className='favorites-item'>
			<div className='favorites-sub-item'>
				<span>{favoritesItem.ticker}</span>
				<span
					className='favorites-item__remove'
					onClick={() => removeFavoritesItem(favoritesItem.ticker)}>
					&mdash;
				</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Exchange: </span>
				<span>{favoritesItem.exchange}</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Price: </span>
				<span>{favoritesItem.price}$</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Change: </span>
				<span className={favoritesItem.growth}>
					{favoritesItem.change}$
				</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Change percent: </span>
				<span className={favoritesItem.growth}>
					{favoritesItem.change_percent}%
				</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Dividend: </span>
				<span>{favoritesItem.dividend}$</span>
			</div>
			<div className='favorites-sub-item'>
				<span>Yield: </span>
				<span>{favoritesItem.yield}$</span>
			</div>
			<div className='favorites-sub-item'>
				<span>{favoritesItem.last_trade_time}</span>
			</div>
		</div>
	);
}

export default FavoritesItem;
