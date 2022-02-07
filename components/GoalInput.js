import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('')

	const handleGoalInput = enteredText => {
		setEnteredGoal(enteredText)
	}
	return (
		<View style={styles.textAreaContainer}>
			<TextInput
				placeholder='Course Goals'
				style={styles.textArea}
				onChangeText={handleGoalInput}
				value={enteredGoal}
			/>
			<Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
		</View>
	)
}

const styles = StyleSheet.create({
	textAreaContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center'
	},
	textArea: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%'
	}
})

export default GoalInput
