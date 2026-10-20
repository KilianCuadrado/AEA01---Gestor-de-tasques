<script setup>
  import { ref, reactive } from 'vue';
  import Task from './model/task.js';

  const showTaskForm = ref(false);
  const showNotCompletedTasks = ref(false);
  const newTaskTitle = ref('');
  const newTaskDescription = ref('');

  const tasks = ref([
    new Task('1', 'Task 1'),
    new Task('2', 'Task 2'),
    new Task('3', 'Task 3')
  ]);

  const addTask = () => {
    if (newTaskTitle.value.trim() === '') {
      alert('Please enter a task title.');
      return;
    }
    const newTaskId = tasks.value.length + 1;

    while (tasks.value.some(task => task.id === newTaskId.toString())) {
      newTaskId++;
    }

    const newTask = new Task(newTaskId.toString(), newTaskTitle.value);
    tasks.value.push(newTask);
    newTaskTitle.value = '';
  };

  const deleteTask = (task) => {
    tasks.value.splice(tasks.value.indexOf(task), 1);
  };

</script>

<template>

    <h1>Task Manager</h1>

    <input v-model="newTaskTitle" placeholder="Task Title" required />
    <button v-on:click="addTask">Add Task</button>

    <input type="checkbox" v-on:click="showNotCompletedTasks=!showNotCompletedTasks" id="showNotCompletedTasks"/>
    <label for="showNotCompletedTasks">Show Not Completed Tasks</label>

    <ul v-for="task in tasks" :key="task.id">
      <li v-if="!showNotCompletedTasks || !task.completed">
          <span>{{ task.title }}</span>
          <span> Created: {{ task.date }}</span>
          <button v-on:click="task.completed = !task.completed"> {{ task.completed ? 'Descompletar' : 'Completar' }}</button>
          <button v-on:click="deleteTask(task)">Eliminar</button>
      </li>
    </ul>

    <p>Total: {{ tasks.length }}</p>

    <p>Pendents: {{ tasks.filter(t => !t.completed).length }}</p>

</template>

<style scoped>
</style>
