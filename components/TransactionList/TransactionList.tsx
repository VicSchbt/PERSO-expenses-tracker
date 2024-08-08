import { type Transaction } from '@/types/Transaction';
import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
import TransactionHeader from './TransactionHeader';
import './TransactionList.scss';
import Card from '../common/Card/Card';

const TransactionList = async () => {
	const { transactions, error } = await getTransactions();

	if (error) {
		return <p className='error'>{error}</p>;
	}

	return (
		<Card additionalClass='transaction'>
			<TransactionHeader />
			<ul className='transaction-list'>
				{transactions &&
					transactions.map((transaction: Transaction) => (
						<TransactionItem
							key={transaction.id}
							transaction={transaction}
						/>
					))}
			</ul>
		</Card>
	);
};

export default TransactionList;
