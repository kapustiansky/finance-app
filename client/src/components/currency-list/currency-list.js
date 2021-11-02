import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, requestCurrency } from '../../actions';
import io from 'socket.io-client';
import СurrencyItemLogic from '../currency-item-logic';
import './currency-list.css';

function СurrencyList() {
	const dispatch = useDispatch();
	const currency = useSelector((state) => state.currency);

	useEffect(() => {
		const URL = 'http://localhost:4000';
		const socket = io.connect(URL);
		dispatch(requestCurrency());

		socket.emit('start');
		socket.on('ticker', function (json) {
			const response = json;
			const res = Array.isArray(response) ? response : [response];
			dispatch(fetchCurrency(res));
		});
	}, []);

	return (
		<section className='main-container'>
			<div className='currency-wrapper'>
				{currency.map((data, index) => {
					return (
						<СurrencyItemLogic key={index} currencyItem={data} />
					);
				})}
			</div>
		</section>
	);
}

export default СurrencyList;
