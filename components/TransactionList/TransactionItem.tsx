import { type Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import { formatDate } from '@/lib/utils';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
	return (
		<li className='transaction-item'>
			<span className='date'>{formatDate(transaction.createdAt)}</span>
			<span className='label'>{transaction.text}</span>
			<span className={transaction.amount < 0 ? 'debit' : 'credit'}>
				{addCommas(Math.abs(transaction.amount))}
			</span>
		</li>
	);
};

export default TransactionItem;
