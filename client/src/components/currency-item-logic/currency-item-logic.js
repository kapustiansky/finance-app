import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendToFavorites } from '../../actions';
import СurrencyItem from '../currency-item';

function СurrencyItemLogic({ currencyItem }) {
	const favorites = useSelector((state) => state.favorites);
	const favoriteItem = favorites.find((i) => i.ticker === currencyItem.ticker)
		? ''
		: '+';
	const dispatch = useDispatch();

	const addToFavorites = (id) => {
		if (favoriteItem === '+') {
			dispatch(sendToFavorites(id));
		}
	};

	let newObj;
	if (currencyItem.growth === true) {
		let growth = { growth: 'up-class' };
		newObj = Object.assign({}, currencyItem, growth);
	} else if (currencyItem.growth === false) {
		let growth = { growth: 'down-class' };
		newObj = Object.assign({}, currencyItem, growth);
	} else {
		let growth = { growth: 'without-changes-class' };
		newObj = Object.assign({}, currencyItem, growth);
	}

	return (
		<СurrencyItem
			currencyItem={newObj}
			favoriteItem={favoriteItem}
			addToFavorites={addToFavorites}
		/>
	);
}

export default СurrencyItemLogic;
