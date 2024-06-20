<template>
  <q-card>
    <q-card-section>
      <q-input v-model="title" placeholder="New Todo" />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Add" @click="addTodo" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import {useTodoStore} from "stores/todo-store";


const title = ref('');
const todoStore = useTodoStore();

const addTodo = () => {
  if (title.value) {
    todoStore.addTodo({ title: title.value, completed: false });
    title.value = '';
  }
};
</script>
