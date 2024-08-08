import { env } from 'process';

export function addCommas(x: number): string {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat(env.LOCALE, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}
