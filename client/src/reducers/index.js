const initialState = {
	currency: [],
	favorites: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CURRENCY_REQESTED':
			return {
				currency: [],
				favorites: [],
			};
		case 'CURRENCY_LOADED':
			let favorites = [];
			let currency;

			if (state.favorites.length > 0) {
				state.favorites.forEach((element) => {
					const coincide = action.payload.find(
						(i) => i.ticker === element.ticker
					);

					let growth;
					if (Number(element.price) > Number(coincide.price)) {
						growth = { growth: false };
					} else {
						growth = { growth: true };
					}

					favorites.push(Object.assign({}, coincide, growth));
				});
			}

			if (state.currency.length > 0) {
				currency = action.payload.map((i) => {
					const coincide = state.currency.find(
						(item) => item.ticker === i.ticker
					);

					let growth;
					if (Number(i.price) > Number(coincide.price)) {
						growth = { growth: true };
					} else {
						growth = { growth: false };
					}

					return Object.assign({}, i, growth);
				});
			} else {
				currency = action.payload;
			}

			return {
				currency: currency,
				favorites: favorites,
			};
		case 'FAVORITES_ADDED':
			let ticker = state.currency.find(
				(i) => i.ticker === action.payload
			);

			return {
				...state,
				favorites: [...state.favorites, ticker],
			};
		case 'FAVORITES_REMOVED':
			let arr = state.favorites.filter(
				(i) => i.ticker !== action.payload
			);

			return {
				...state,
				favorites: arr,
			};
		default:
			return state;
	}
};

export default reducer;
