import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('')

	const handleGoalInput = enteredText => {
		setEnteredGoal(enteredText)
	}

	const addGoalHandlerButton = () => {
		props.onAddGoal(enteredGoal)
		setEnteredGoal('')
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.textAreaContainer}>
				<TextInput
					placeholder='What are your goals?'
					style={styles.textArea}
					onChangeText={handleGoalInput}
					value={enteredGoal}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title='CANCEL' color='#ccc' onPress={props.onCancel} />
					</View>
					<View style={styles.button}>
						<Button title='ADD' onPress={addGoalHandlerButton} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	textAreaContainer: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	textArea: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
		marginBottom: 10
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '60%'
	},
	button: {
		width: '50%'
	}
})

export default GoalInput
