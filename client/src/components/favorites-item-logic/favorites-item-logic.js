import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../actions';
import FavoritesItem from '../favorites-item';

function FavoritesItemLogic({ favoritesItem }) {
	const dispatch = useDispatch();

	const removeFavoritesItem = (id) => {
		dispatch(removeItem(id));
	};

	let newObj;
	if (favoritesItem.growth === true) {
		let growth = { growth: 'up-class' };
		newObj = Object.assign({}, favoritesItem, growth);
	} else if (favoritesItem.growth === false) {
		let growth = { growth: 'down-class' };
		newObj = Object.assign({}, favoritesItem, growth);
	} else {
		let growth = { growth: 'without-changes-class' };
		newObj = Object.assign({}, favoritesItem, growth);
	}

	return (
		<FavoritesItem
			favoritesItem={newObj}
			removeFavoritesItem={removeFavoritesItem}
		/>
	);
}

export default FavoritesItemLogic;
