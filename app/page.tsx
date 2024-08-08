import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import Guest from '@/components/Guest';
import IncomeExpense from '@/components/IncomeExpense';
import { currentUser } from '@clerk/nextjs/server';
import TransactionList from '@/components/TransactionList/TransactionList';
import Card from '@/components/common/Card/Card';

const HomePage = async () => {
	const user = await currentUser();

	if (!user) {
		return <Guest />;
	}
	return (
		<div className='homepage'>
			<h2 className='title'>Welcome, {user.firstName}</h2>
			<Card additionalClass='balance'>
				<Balance />
				<IncomeExpense />
			</Card>
			<AddTransaction type='income' />
			<AddTransaction type='expense' />
			<TransactionList />
		</div>
	);
};

export default HomePage;
