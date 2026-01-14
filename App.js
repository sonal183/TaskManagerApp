import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';


export default function App() {
const [tasks, setTasks] = useState([]);


const addTask = (title) => {
setTasks(prev => [...prev, { id: Date.now().toString(), title, completed: false }]);
};


const toggleTask = (id) => {
setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: true } : t));
};


const deleteTask = (id) => {
setTasks(prev => prev.filter(t => t.id !== id));
};


return (
<View style={styles.container}>
<AddTask onAdd={addTask} />
<FlatList
data={tasks}
keyExtractor={item => item.id}
renderItem={({ item }) => (
<TaskItem
task={item}
onToggle={toggleTask}
onDelete={deleteTask}
/>
)}
/>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 20, marginTop: 40 }
});