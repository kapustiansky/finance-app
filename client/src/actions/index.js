const requestCurrency = () => {
	return {
		type: 'CURRENCY_REQESTED',
	};
};

const fetchCurrency = (data) => {
	return {
		type: 'CURRENCY_LOADED',
		payload: data,
	};
};

const sendToFavorites = (data) => {
	return {
		type: 'FAVORITES_ADDED',
		payload: data,
	};
};

const removeItem = (data) => {
	return {
		type: 'FAVORITES_REMOVED',
		payload: data,
	};
};

export { fetchCurrency, requestCurrency, sendToFavorites, removeItem };
