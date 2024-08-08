import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Expense Tracker',
	description: 'Track your expenses and create a budget',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={poppins.className}>
					<Header />
					<main>{children}</main>
					<ToastContainer />
				</body>
			</html>
		</ClerkProvider>
	);
}
