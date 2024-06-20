<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @update="updateTodo" @delete="deleteTodo" />
    </div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue';
import TodoItem from 'components/TodoItem.vue';
import {useTodoStore} from "stores/todo-store";

const todoStore = useTodoStore();
const todos = todoStore.$state.todos;

onMounted(() => {
  todoStore.fetchTodos();
  console.log(todos)
});

const updateTodo = async (updatedTodo) => {
  await todoStore.updateTodo(updatedTodo);
};

const deleteTodo = (id) => {
  todoStore.removeTodo(id);
};
</script>
