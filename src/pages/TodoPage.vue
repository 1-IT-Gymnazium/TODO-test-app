<template>
  <q-page padding>
    <AddTodo class="q-my-md" />
    <TodoList />
  </q-page>
</template>

<script setup>
import AddTodo from 'components/AddTodo.vue';
import TodoList from 'components/TodoList.vue';
</script>
