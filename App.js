import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	FlatList
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])
	const [showModal, setShowModal] = useState(false)

	const addGoalhandler = goalTitle => {
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: goalTitle }
		])
		setShowModal(false)
	}

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId)
		})
	}

	const showModalHandler = () => {
		setShowModal(true)
	}

	const cancelHandler = () => {
		setShowModal(false)
	}

	return (
		<View style={styles.container}>
			<Button title='Add New Goal' onPress={showModalHandler} />
			<GoalInput
				visible={showModal}
				onAddGoal={addGoalhandler}
				onCancel={cancelHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						id={itemData.item.id}
						onDelete={removeGoalHandler}
						title={itemData.item.value}
					/>
				)}
			></FlatList>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 50
	}
})
