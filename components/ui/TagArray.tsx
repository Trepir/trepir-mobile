/* eslint-disable react/require-default-props */
import { Text, View } from 'native-base';
import React from 'react';
import { Tag } from '../../types';
import TagItem from './Tag';

function TagArray({ tags, short = false }: { tags: Tag[]; short?: boolean }) {
	if (short) {
		return (
			<View flexDirection="row" alignItems="center">
				<View key={tags[0]} mr={1}>
					<TagItem text={tags[0]} />
				</View>
				<View key={tags[1]} mr={1}>
					<TagItem text={tags[1]} />
				</View>
				{tags.length > 2 && <Text>{`+${tags.length - 2}`}</Text>}
			</View>
		);
	}
	return (
		<View flexDirection="row">
			{tags.map((tag) => (
				<View key={tag} mr={1}>
					<TagItem text={tag} />
				</View>
			))}
		</View>
	);
}

export default TagArray;
