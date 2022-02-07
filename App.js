import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])

	const addGoalhandler = goalTitle => {
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ key: Math.random().toString(), value: goalTitle }
		])
	}

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId)
		})
	}

	return (
		<View style={styles.container}>
			<GoalInput onAddGoal={addGoalhandler} />
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
