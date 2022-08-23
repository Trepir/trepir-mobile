export function getDate(startDate: string, index: number) {
	const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	return date.toLocaleDateString();
}
