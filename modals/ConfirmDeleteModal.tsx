import { Heading, HStack, Modal, Pressable, Text } from 'native-base';
import React, { Dispatch, SetStateAction } from 'react';
import Colors from '../constants/Colors';
// import ExitIcon from '../icons/ExitIcon';

type Props = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<any>>;
	pressDelete: () => void;
};

function ConfirmDeleteModal({ isOpen, setIsOpen, pressDelete }: Props) {
	return (
		<Modal isOpen={isOpen}>
			<Modal.Content>
				<Modal.Body alignItems="center">
					<Heading
						opacity={75}
						textAlign="center"
						fontWeight="semibold"
						width="5/6"
						mb={5}
						fontSize="xl"
					>
						Do you want to Remove this Event from your Trip?
					</Heading>
					<HStack>
						<Pressable
							borderColor="#FF4141"
							borderWidth={2}
							bgColor="#FF4141"
							alignSelf="center"
							rounded="lg"
							m={3}
							onPress={() => {
								pressDelete();
								setIsOpen(false);
							}}
						>
							<Text
								width="24"
								p={3}
								color="white"
								fontSize="md"
								fontWeight="semibold"
								textAlign="center"
							>
								Delete
							</Text>
						</Pressable>
						<Pressable
							bgColor="white"
							alignSelf="center"
							rounded="lg"
							borderColor={Colors.grey.medium}
							borderWidth={2}
							onPress={() => setIsOpen(false)}
							m={3}
						>
							<Text
								py={3}
								width="24"
								color={Colors.grey.medium}
								fontSize="md"
								fontWeight="semibold"
								textAlign="center"
							>
								Cancel
							</Text>
						</Pressable>
					</HStack>
				</Modal.Body>
			</Modal.Content>
		</Modal>
	);
}

export default ConfirmDeleteModal;
