import './Card.scss';

const Card = ({
	children,
	additionalClass = '',
}: {
	children: React.ReactNode;
	additionalClass?: string;
}) => {
	return <div className={`card ${additionalClass}`}>{children}</div>;
};

export default Card;
