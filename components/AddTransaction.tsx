'use client';

import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';
import Button from './common/Button/Button';
import Card from './common/Card/Card';

const AddTransaction = ({ type }: { type: 'income' | 'expense' }) => {
	const formRef = useRef<HTMLFormElement>(null);

	const clientAction = async (formData: FormData) => {
		const { data, error } = await addTransaction(formData, type);

		if (error) {
			toast.error(error);
		} else {
			toast.success('Transaction added');
			formRef.current?.reset();
		}
	};

	return (
		<Card additionalClass={`add-${type}`}>
			<h3>{`Add ${type}`}</h3>
			<form
				ref={formRef}
				action={clientAction}
			>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						id='text'
						name='text'
						placeholder='Entre text...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						name='amount'
						id='amount'
						placeholder='Enter amount...'
						step='0.01'
					/>
				</div>
				<Button
					variant='solid'
					radius='full'
				>{`Add ${type}`}</Button>
			</form>
		</Card>
	);
};

export default AddTransaction;
