export function getDate(startDate: string, index: number) {
	const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	return date.toLocaleDateString();
}
export function getDateAsDate(startDate: string, index: number, timeSet?: string) {
	/*
	const formattedStartDate = new Date(
		new Date(startDate).setHours(
			checkInTime.value.getHours() + 2,
			checkInTime.value.getMinutes()
		)
	).toISOString();
	*/
	const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	if (timeSet) {
		const newDate = new Date(
			date.setHours(
				new Date(Date.parse(timeSet!)).getHours(),
				new Date(Date.parse(timeSet!)).getMinutes()
			)
		);
		return newDate;
	}
	return date;
}

/**
 * 
 * const date = new Date(startDate);
	date.setDate(date.getDate() + index);
	return date;
 */
