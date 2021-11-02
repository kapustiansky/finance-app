import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import СurrencyItem from '.';

it('currency items is rendered', () => {
	let data = {
		ticker: 'TSLA',
		exchange: 'NASDAQ',
		price: 272.13,
		change: 158.76,
		change_percent: 0.1,
		dividend: 0.96,
		yield: 1.0,
		last_trade_time: '2021-04-30T11:53:21.000Z',
	};

	let { container } = render(<СurrencyItem currencyItem={data} />);
	expect(container.firstChild).toHaveClass('currency-item');
});
