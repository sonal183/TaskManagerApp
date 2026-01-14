# Task Manager (To‑Do) Mobile App — React Native

## Executive Summary

This project delivers a lightweight, single‑screen Task Manager mobile application built with React Native and Expo. The solution demonstrates core mobile fundamentals: functional components, hook‑driven state management, modular UI composition, and clean separation of concerns — optimized for rapid evaluation and maintainable delivery.

---

## Business Objectives

* Enable users to create, complete, and delete tasks in real time.
* Maintain a minimal UI footprint with high usability.
* Demonstrate production‑ready React Native fundamentals.

---

## Feature Set

* Task list with title and status.
* Add new task via input field.
* Tap to mark task as completed.
* Visual differentiation for completed tasks.
* Delete task functionality.
* (Optional) Local persistence using AsyncStorage.

---

## Tech Stack

* React Native
* Expo
* JavaScript (ES6)
* React Hooks: `useState`, `useEffect`

---

## Folder Structure

```
TaskManagerApp/
 ├─ components/
 │   ├─ AddTask.js
 │   └─ TaskItem.js
 ├─ App.js
 ├─ package.json
```

---

## Setup Instructions

1. Install Node.js (v18+ recommended).
2. Install Expo CLI via npx (no global install required).
3. Navigate into project folder.
4. Install dependencies.
5. Start the app.

```bash
npm install
npx expo start
```

Run on:

* Android Emulator (press `a`)
* Expo Go mobile app (scan QR)

---

## Application Architecture

* `App.js` acts as the state controller.
* UI responsibilities are delegated to child components.
* State is lifted and propagated via props.
* UI updates are fully state‑driven.

This ensures predictable rendering and component reusability.

---

**App.js**:

```javascript
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks(prev => [...prev, { id: Date.now().toString(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <AddTask onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }
});
```

---

### AddTask.js

```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const submit = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }
});
```

---

### TaskItem.js

```javascript
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onToggle(task.id)}>
      <View style={styles.item}>
        <Text style={[styles.text, task.completed && styles.completed]}>
          {task.title}
        </Text>
        <Button title="Delete" onPress={() => onDelete(task.id)} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1 },
  text: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: 'gray' }
});
```

---

## Functional Validation

* Add task → Task appears in list.
* Tap task → Status toggles to completed.
* Completed task → Strikethrough visual.
* Delete → Task removed instantly.

---


---

## Closing Note

This project is intentionally scoped for clarity, stability, and evaluative transparency — prioritizing correctness, structure, and execution discipline over feature bloat.

<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/0a5d55c9-9ca9-4c74-af26-e153ba8a7513" />

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
