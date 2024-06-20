<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @update="updateTodo" @delete="deleteTodo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TodoItem from '../components/TodoItem.vue';
import {useTodoStore} from "stores/todo-store";


const todoStore = useTodoStore();
const todos = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await todoStore.fetchTodos();
  todos.value = todoStore.todos;
  isLoading.value = false;
});

const updateTodo = async (updatedTodo) => {
  await todoStore.updateTodo(updatedTodo);
  // Aktualizujte lokální seznam úkolů, pokud je to nutné
};

const deleteTodo = async (id) => {
  await todoStore.removeTodo(id);
  // Aktualizujte lokální seznam úkolů po smazání
  todos.value = todoStore.todos;
};
</script>
