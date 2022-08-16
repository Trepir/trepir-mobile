import Colors from '../constants/Colors';

const dayDifference = (start: string, end: string) => {
	const difference = new Date(end).getTime() - new Date(start).getTime();
	const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
	return TotalDays;
};

export const generateDateRange = (start: string, end: string) => {
	let dateRangeObject: any = {
		[start]: { startingDay: true, color: Colors.primary.dark, textColor: 'white' },
	};
	const intermediateDates = new Date(start);

	intermediateDates.setDate(intermediateDates.getDate() + 1);

	const dayDiff = dayDifference(start, end) - 1;
	for (let i = 0; i < dayDiff; i += 1) {
		dateRangeObject = {
			...dateRangeObject,
			[intermediateDates.toISOString().split('T')[0]]: {
				color: Colors.primary.normal,
				textColor: 'white',
			},
		};
		intermediateDates.setDate(intermediateDates.getDate() + 1);
	}

	dateRangeObject = {
		...dateRangeObject,
		[end]: { endingDay: true, color: Colors.primary.dark, textColor: 'white' },
	};

	return dateRangeObject;
};
