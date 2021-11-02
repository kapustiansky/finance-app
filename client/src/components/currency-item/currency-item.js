import React from 'react';
import './currency-item.css';

function СurrencyItem({ currencyItem, favoriteItem, addToFavorites }) {
	return (
		<div
			className='currency-item'
			onClick={() => addToFavorites(currencyItem.ticker)}>
			<div className='currency-item__top'>
				<span className='currency-item__exchange'>
					{currencyItem.exchange}
				</span>
				<span className='favorite-add'>{favoriteItem}</span>
			</div>
			<span className='currency-item__price'>{currencyItem.price}$</span>
			<div className='currency-item__bottom'>
				<span className='currency-item__ticker'>
					{currencyItem.ticker}
				</span>
				<span className={currencyItem.growth}>
					{currencyItem.change_percent}%
				</span>
			</div>
		</div>
	);
}

export default СurrencyItem;
