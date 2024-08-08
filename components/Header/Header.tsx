import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import Button from '../common/Button/Button';
import './Header.scss';

const Header = async () => {
	const user = await checkUser();
	return (
		<header className='header'>
			<nav className='navbar'>
				<div className='navbar-container'>
					<h2>Expense Tracker</h2>
					<div>
						<SignedOut>
							<SignInButton>
								<Button
									variant='outline'
									radius='full'
								>
									Sign In
								</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
