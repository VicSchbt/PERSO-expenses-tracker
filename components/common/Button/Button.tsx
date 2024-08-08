import './Button.scss';

const Button = ({
	children,
	variant = 'solid',
	radius = 'none',
}: {
	children: React.ReactNode;
	variant: 'solid' | 'soft' | 'surface' | 'outline';
	radius: 'none' | 'large' | 'full';
}) => {
	const style = `btn variant-${variant} radius-${radius}`;

	return <button className={style}>{children}</button>;
};

export default Button;
